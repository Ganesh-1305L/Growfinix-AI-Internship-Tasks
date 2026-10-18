# Task 2: AI-Powered Data Extraction (Unstructured to JSON)

## Project Overview

This project uses the Google Gemini API and Python to extract structured information from unstructured customer tour enquiries.

The application processes natural-language text and returns clean JSON containing the customer's name, requested travel dates, and destination.

## Objectives

- Extract customer information from unstructured text.
- Identify requested travel dates and destinations.
- Convert extracted information into structured JSON.
- Handle missing information without inventing details.
- Demonstrate the use of an LLM API for automated data extraction.

## Technologies Used

- **Programming Language:** Python
- **AI Model API:** Google Gemini API
- **Python SDK:** `google-genai`
- **Data Validation:** Pydantic
- **Environment Variables:** `python-dotenv`

## Project Structure

```text
Task-2/
├── main.py
├── requirements.txt
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Prerequisites

- Python 3.10 or newer
- Visual Studio Code or another Python editor
- A Gemini API key

### 2. Get a Gemini API Key

Visit [Google AI Studio](https://aistudio.google.com/apikey) and obtain an API key if your account has access.

### 3. Create a Virtual Environment

Open a terminal in the project directory and run:

```powershell
py -m venv .venv
```

### 4. Install Dependencies

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

### 5. Configure Environment Variables

Create a `.env` file in the project directory and add your credentials:

```text
GEMINI_API_KEY=your_actual_api_key
GEMINI_MODEL=your_available_gemini_model_id
```

Replace the placeholders with your actual API key and the model ID available in your Gemini API account.

**Security:** Never upload your `.env` file or API key to GitHub.

### 6. Run the Application

```powershell
.\.venv\Scripts\python.exe main.py
```

Enter a customer enquiry when prompted. Press Enter on a blank line to submit it.

## Example Input

```text
Hello, my name is Priya Sharma.
I want to visit Jaipur from 12 to 15 December 2026.
Please send me a tour package.
```

## Example Output

```json
{
  "customer_name": "Priya Sharma",
  "requested_dates": "12 to 15 December 2026",
  "destination": "Jaipur"
}
```

The output is illustrative. Actual results depend on the input and model response.

## How It Works

1. The user enters an unstructured tour enquiry.
2. Python sends the text to the Gemini API.
3. Gemini identifies the requested customer information.
4. Pydantic validates the structured response.
5. The application displays the extracted fields as JSON.

## Error Handling

The application checks whether the API key is configured and handles errors returned during processing. Missing information should be represented as `null` rather than fabricated.

## Expected Outcome

The project demonstrates how a Large Language Model can convert unstructured text into structured data for applications such as travel enquiry management, customer relationship management, and automated data entry.


## Future Enhancements

- Process multiple enquiries from files.
- Save extracted results to CSV or a database.
- Add automated tests for missing and ambiguous fields.
- Build a web interface for customer enquiries.
- Improve date normalization and validation.

## Author

Your Name

## License

This project is intended for educational and internship purposes.

