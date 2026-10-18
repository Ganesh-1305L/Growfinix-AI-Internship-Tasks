import os
import time
from pathlib import Path

from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs
from elevenlabs import VoiceSettings

load_dotenv()

API_KEY = os.getenv("ELEVENLABS_API_KEY")

if not API_KEY:
    raise ValueError(
        "ELEVENLABS_API_KEY is missing. Add it to your .env file."
    )

client = ElevenLabs(api_key=API_KEY)

INPUT_DIR = Path("input")
OUTPUT_DIR = Path("output")

INPUT_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)

MAX_CHARS = 2500
MAX_RETRIES = 3


def split_text(text, max_chars=MAX_CHARS):
    """Split long text into chunks without cutting words."""
    words = text.split()
    chunks = []
    current = ""

    for word in words:
        if len(word) > max_chars:
            if current:
                chunks.append(current)
                current = ""

            for i in range(0, len(word), max_chars):
                chunks.append(word[i:i + max_chars])
            continue

        candidate = f"{current} {word}".strip()

        if len(candidate) > max_chars:
            chunks.append(current)
            current = word
        else:
            current = candidate

    if current:
        chunks.append(current)

    return chunks


def generate_audio(text, output_path):
    """Generate speech with retry handling and save an MP3."""
    chunks = split_text(text)
    temporary_files = []

    try:
        for index, chunk in enumerate(chunks, start=1):
            print(f"Generating audio chunk {index}/{len(chunks)}...")

            for attempt in range(MAX_RETRIES):
                try:
                    audio = client.text_to_speech.convert(
                        text=chunk,
                        voice_id="JBFqnCBsd6RMkjVDRZzb",
                        model_id="eleven_multilingual_v2",
                        output_format="mp3_44100_128",
                        voice_settings=VoiceSettings(
                            stability=0.5,
                            similarity_boost=0.75
                        )
                    )

                    temp_path = OUTPUT_DIR / f"chunk_{index}.mp3"

                    with open(temp_path, "wb") as file:
                        for audio_chunk in audio:
                            file.write(audio_chunk)

                    temporary_files.append(temp_path)
                    break

                except Exception as error:
                    if attempt == MAX_RETRIES - 1:
                        raise

                    wait_time = 2 ** attempt
                    print(f"Request failed: {error}")
                    print(f"Retrying in {wait_time} seconds...")
                    time.sleep(wait_time)

        with open(output_path, "wb") as final_file:
            for temp_path in temporary_files:
                with open(temp_path, "rb") as chunk_file:
                    final_file.write(chunk_file.read())

        print(f"Audio saved successfully: {output_path}")

    finally:
        for temp_path in temporary_files:
            temp_path.unlink(missing_ok=True)


def main():
    input_file = INPUT_DIR / "blog.txt"

    if not input_file.exists():
        input_file.write_text(
            "Welcome to our podcast. Today, we explore how "
            "artificial intelligence is transforming our daily lives. "
            "AI helps people learn faster, automate repetitive tasks, "
            "and discover new ways to solve problems.",
            encoding="utf-8"
        )
        print(f"Sample text created at {input_file}")

    text = input_file.read_text(encoding="utf-8").strip()

    if not text:
        print("The input file is empty. Add some text and try again.")
        return

    output_path = OUTPUT_DIR / "podcast.mp3"
    generate_audio(text, output_path)


if __name__ == "__main__":
    main()
