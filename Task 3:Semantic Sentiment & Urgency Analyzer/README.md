# Task 3: Semantic Sentiment & Urgency Analyzer

## Project Overview

The Semantic Sentiment & Urgency Analyzer is a Python application that uses the Google Gemini API to analyze customer feedback and support tickets.

Unlike basic sentiment analysis, which only identifies positive or negative sentiment, this project also determines the urgency of an issue and extracts the main complaint or praise. This helps customer support teams prioritize tickets and respond more effectively.

## Objectives

- Classify customer sentiment.
- Determine the urgency of customer issues.
- Extract the core complaint or praise.
- Return structured JSON output.
- Demonstrate the use of a Large Language Model (LLM) for customer support analysis.

## Technologies Used

- **Programming Language:** Python
- **AI Model API:** Google Gemini API
- **Python SDK:** `google-genai`
- **Data Validation:** Pydantic
- **Environment Variables:** `python-dotenv`

## Features

- **Sentiment Classification:** Positive, Neutral, or Negative.
- **Urgency Classification:** High, Medium, or Low.
- **Core Issue Extraction:** Generates a concise summary of the main complaint or praise.
- **Structured Output:** Returns results in JSON format.
- **Schema Validation:** Uses Pydantic to validate the expected output structure.
- **Secure Configuration:** Loads the API key from an environment file.

## Project Structure

```text
Task-3/
├── main.py
├── requirements.txt
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Python 3.10 or newer
- Visual Studio Code or another Python editor
- A Google Gemini API key

### 1. Obtain an API Key

Visit [Google AI Studio](https://aistudio.google.com/apikey) to obtain a Gemini API key if access is available for your account.

### 2. Create a Virtual Environment

Open the project folder in VS Code and run the following command in the terminal:

```powershell
py -m venv .venv
```

### 3. Install Dependencies

Install the required Python packages:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file in the project directory:

```text
GEMINI_API_KEY=your_actual_gemini_api_key
GEMINI_MODEL=your_available_gemini_model_id
```

Replace the placeholders with your actual API key and the Gemini model ID that is available in your account.

**Important:** Never upload your `.env` file or API key to GitHub.

### 5. Run the Application

Execute the following command:

```powershell
.\.venv\Scripts\python.exe main.py
```

Enter customer feedback into the terminal. Press Enter on a blank line to submit the text for analysis.

## Example Input

```text
Hello support team,

I have been trying to place an order since this morning,
but the checkout page keeps crashing after I enter my
payment details. I have tried three times and cannot
complete the purchase.

This is affecting our business and we are losing orders.
Please fix this as soon as possible because customers
are complaining too.
```

## Example Output

```json
{
  "sentiment": "Negative",
  "urgency": "High",
  "core_issue_or_praise": "The checkout page repeatedly crashes during payment, preventing customers from placing orders."
}
```

*Note: This output is illustrative. Actual classifications and wording may vary depending on the model response.*

## How It Works

1. The user enters customer feedback or a support ticket.
2. The application sends the feedback to the Gemini API.
3. Gemini analyzes the text and classifies its sentiment.
4. The model assigns an urgency level based on the issue's severity and time sensitivity.
5. The model summarizes the core complaint or praise.
6. Pydantic validates the structured response.
7. The application displays the result as JSON.

## Urgency Classification Guidelines

| Urgency | Description | Example |
|---|---|---|
| High | Critical or time-sensitive issue | Website outage preventing all customer orders |
| Medium | Significant problem requiring timely attention | Repeated delivery delays |
| Low | Minor issue or non-urgent feedback | Suggestion to improve website design |

## Applications

- Customer support ticket prioritization
- Customer feedback analysis
- Complaint management
- Service quality monitoring
- Customer experience improvement

## Limitations

- Results depend on the quality and context of the input.
- The model may occasionally misclassify sentiment or urgency.
- Urgency is estimated from text and does not replace human judgment.
- API availability, usage limits, and pricing depend on the selected Gemini model and account.

## Security

- Store API credentials in `.env`.
- Keep `.env` excluded through `.gitignore`.
- Upload `.env.example` instead of the actual `.env` file.
- Avoid entering sensitive customer information into the application unless authorized.


## Future Enhancements

- Analyze multiple tickets from CSV files.
- Save results to a database.
- Add a dashboard to display ticket priorities.
- Include automated tests for different sentiment and urgency cases.
- Integrate with a customer support platform.



## License

This project is intended for educational and internship purposes.

