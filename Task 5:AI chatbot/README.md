# Growfinix AI — AI Chat Interface

## 1. Project Overview

Growfinix AI is a responsive, web-based AI chat application developed as part of the Growfinix internship assignment.

The application allows users to enter questions and receive AI-generated responses using Google's Gemini API. It features a modern chat interface, streaming responses, Markdown rendering, loading indicators, and error handling.

The project uses React for the frontend, Node.js and Express for the backend, Tailwind CSS for styling, and the Vercel AI SDK to connect with Gemini.

## 2. Objectives

- Build a responsive, ChatGPT-style AI chat interface.
- Integrate a large language model through an API.
- Display AI responses progressively using streaming.
- Support formatted responses using Markdown.
- Provide a simple and user-friendly chat experience.
- Handle loading states and API errors.
- Protect API credentials using environment variables.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| React | Builds the interactive chat interface |
| Vite | Runs the frontend development server |
| Tailwind CSS | Provides responsive styling and layout |
| Node.js | Runs the backend JavaScript environment |
| Express.js | Creates the backend API endpoint |
| Vercel AI SDK | Connects the backend to the AI model and streams responses |
| Google Gemini API | Generates AI responses |
| React Markdown | Renders Markdown-formatted messages |
| Remark GFM | Supports GitHub Flavored Markdown, including tables and lists |
| dotenv | Loads private configuration from environment variables |

## 4. Features Implemented

### 4.1 Interactive Chat Interface
Users can type messages and submit questions through a clean, responsive chat interface.

### 4.2 Gemini API Integration
The backend sends the conversation to Google's Gemini model and receives the generated response.

### 4.3 Streaming Responses
Responses are streamed progressively to the frontend instead of waiting for the entire answer before displaying it.

### 4.4 Markdown Rendering
AI responses can display formatted text, headings, lists, links, code blocks, and GitHub Flavored Markdown tables.

### 4.5 Loading Indicators
A loading state informs the user when the AI is generating a response. The Send button is disabled while a request is in progress.

### 4.6 New Chat
The New Chat button clears the current conversation and lets the user start a fresh chat.

### 4.7 Suggested Prompts
The initial screen provides example prompts that users can select to get started quickly.

### 4.8 Error Handling
The interface displays error messages when a request fails, helping users understand when the application cannot generate a response.

### 4.9 Responsive Design
The layout uses Tailwind CSS to adapt to different screen sizes.

### 4.10 API Key Protection
The Gemini API key is configured in a local `.env` file and accessed by the backend. The real API key must never be committed to the public repository.

## 5. Project Architecture

The application consists of two main parts.

**Frontend:** React displays the chat interface, manages the conversation, sends requests to the backend, and renders streamed responses.

**Backend:** Express exposes the `/api/chat` endpoint. The Vercel AI SDK sends the conversation to Gemini and streams the generated text back to the frontend.

### Request Flow

1. The user enters a message in the React interface.
2. React sends the conversation to the backend using an HTTP POST request.
3. Express receives the request at `/api/chat`.
4. The Vercel AI SDK calls the configured Gemini model.
5. Gemini generates a response.
6. The backend streams the response to the frontend.
7. React progressively updates the assistant's message and renders its Markdown content.

The Vite development server proxies requests beginning with `/api` to the backend running on port 3001.

## 6. Project Structure

```text
frontend/
├── src/
│   ├── App.jsx          # Chat interface and streaming logic
│   ├── index.css        # Global styles and Markdown styling
│   └── main.jsx         # React application entry point
├── public/              # Static assets, if present
├── .env                 # Local API credentials; not committed
├── .env.example         # Example environment configuration
├── .gitignore           # Excludes secrets and generated files
├── index.html           # Main HTML page
├── package.json         # Project scripts and dependencies
├── package-lock.json    # Dependency lockfile
├── server.mjs           # Express backend and Gemini integration
├── vite.config.js       # Vite, Tailwind, and API proxy configuration
└── README.md            # Project documentation
```

## 7. Prerequisites

Before running the project, install or obtain:

- Node.js and npm
- A Google Gemini API key from Google AI Studio
- A code editor such as Visual Studio Code
- An internet connection for API requests

## 8. Installation and Setup

### Step 1: Open the Project

Clone the repository or download the project from GitHub.

Open a terminal in the `frontend` directory.

### Step 2: Install Dependencies

Run:

```bash
npm install
```

This installs the packages listed in `package.json`.

### Step 3: Configure the API Key

Create a file named `.env` in the `frontend` directory.

Add:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key
PORT=3001
```

Replace `your_actual_api_key` with your own Gemini API key.

**Security note:** Do not upload the real `.env` file to GitHub or share your API key in screenshots or recordings. Use `.env.example` to document the required variables without including credentials.

## 9. Running the Application

The backend and frontend run in separate terminals during local development.

### Terminal 1: Start the Backend

From the `frontend` directory, run:

```bash
node server.mjs
```

Expected output:

```text
AI chat backend running at http://localhost:3001
```

Keep this terminal open.

### Terminal 2: Start the Frontend

Open another terminal in the same `frontend` directory and run:

```bash
npm run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to use Growfinix AI.

Both servers must remain running while using the application.

## 10. How to Use the Application

1. Open the application in your browser.
2. Enter a question in the message box, or select one of the suggested prompts.
3. Click **Send** or press Enter to submit the message.
4. Wait for the AI response to stream into the chat.
5. Ask follow-up questions to continue the conversation.
6. Click **New Chat** to clear the current conversation and start again.

Use Shift + Enter to insert a new line in the message box.

## 11. Testing

The following checks can be performed to verify the application:

| Test | Expected Result |
|---|---|
| Open the application | Chat interface loads |
| Submit a question | User message appears |
| Send a valid request | Gemini response appears progressively |
| Request formatted content | Markdown is rendered appropriately |
| Click a suggested prompt | Prompt is placed in the input field |
| Click New Chat | Current conversation is cleared |
| Encounter an API error | An error message is displayed |
| Check GitHub files | Private `.env` and `node_modules` are excluded |

## 12. Security Considerations

- API credentials are stored in a local environment file.
- The API key is used by the backend rather than embedded in React frontend code.
- The `.env` file is excluded through `.gitignore`.
- The `.env.example` file contains placeholders only.
- Dependencies are installed using `npm install`; `node_modules` is not committed.

Never publish a real API key. If it is accidentally exposed, revoke it and create a replacement.

## 13. Limitations

- Responses depend on Gemini API availability, model access, and account quotas.
- Internet access is required for AI generation.
- AI-generated information may be incorrect and should be verified when accuracy is important.
- The current implementation is intended for local development and demonstration. Production deployment would require additional security, validation, monitoring, and deployment configuration.

## 14. Future Enhancements

- Add persistent conversation history.
- Support multiple conversations and chat titles.
- Add authentication and user accounts.
- Improve accessibility and keyboard navigation.
- Add deployment configuration for a hosted environment.
- Add automated tests and request rate limiting.

## 15. Conclusion

Growfinix AI demonstrates the integration of a modern React frontend with a Node.js and Express backend using the Vercel AI SDK and Google's Gemini API.

The project implements a responsive chat experience with streamed AI responses, Markdown rendering, suggested prompts, loading indicators, and error handling. It provides a foundation for further development of an AI-powered conversational application.

**Project:** Growfinix Internship — Task 5  
**Application:** Growfinix AI Chat Interface

