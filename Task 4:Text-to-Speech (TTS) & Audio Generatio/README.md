# Task 4: Text-to-Speech (TTS) & Audio Generation

## 1. Project Overview

This project converts blog posts, news articles, and other text content into speech using the ElevenLabs Text-to-Speech API. The generated speech is saved as an MP3 audio file that can be played using any compatible audio player.

The project demonstrates API integration, text processing, audio generation, error handling, and file management using Python.

## 2. Tech Stack

- **Programming Language:** Python
- **Text-to-Speech API:** ElevenLabs API
- **Libraries:** `elevenlabs`, `python-dotenv`
- **Output Format:** MP3 audio

## 3. Features

- Converts text into natural-sounding speech.
- Reads text input from a file.
- Splits long text into smaller chunks for processing.
- Retries failed API requests with increasing wait times.
- Saves generated audio in MP3 format.
- Uses environment variables to protect API credentials.
- Creates input and output directories automatically.

## 4. Project Structure

```text
Task 4/
├── main.py
├── requirements.txt
├── .env
├── .gitignore
├── input/
│   └── blog.txt
└── output/
    └── podcast.mp3
```

**Note:** The `.env` file contains the API key and must not be uploaded to GitHub. The `input/` and `output/` folders are created automatically when the program runs.

## 5. Prerequisites

- Python 3.9 or a compatible version supported by the installed dependencies.
- An ElevenLabs account.
- An ElevenLabs API key with Text-to-Speech access.
- An internet connection.

API usage may be subject to account credits, rate limits, and service availability.

## 6. Installation

Clone or download the repository and open the Task 4 folder in VS Code.

Install the required dependencies:

```bash
python -m pip install -r requirements.txt
```

## 7. API Configuration

Create a `.env` file in the Task 4 directory and add your API key:

```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

Replace the placeholder with your own API key.

**Security:** Never upload your API key to GitHub or include it in screenshots or recordings.

## 8. Input Text

The program uses `input/blog.txt` as its input file. If the file does not exist, the program creates it with sample text automatically.

You can replace the sample text with a blog post, news article, or other text that you want to convert into speech.

## 9. Running the Application

Run the following command from the Task 4 directory:

```bash
python main.py
```

The program reads the input text, divides long text into chunks, sends the chunks to ElevenLabs, and writes the generated audio to the output directory.

## 10. Output

The generated audio is saved at:

```text
output/podcast.mp3
```

Open the MP3 file with your computer's audio player to listen to the generated speech.

## 11. Error Handling

The application checks whether the API key is configured before making requests. It also retries failed requests with increasing wait times and reports errors if generation cannot be completed.

Successful generation depends on a valid API key, available account credits, network connectivity, and API availability.

## 12. Limitations

- Audio generation requires internet access.
- API usage may incur charges or be limited by the account's available credits.
- Long text requires multiple API requests.
- Concatenating independently generated MP3 chunks may not always produce perfectly seamless playback.

## 13. Learning Outcomes

- Integrating a third-party AI API with Python.
- Converting text into speech.
- Handling long text through chunking.
- Implementing retry logic for failed requests.
- Managing API credentials using environment variables.
- Saving and organizing generated audio files.

## 14. Conclusion

This project demonstrates an AI-powered text-to-speech workflow that converts written content into downloadable audio. It provides a foundation for applications such as automated podcasts, news narration, accessibility tools, and audio content generation.

