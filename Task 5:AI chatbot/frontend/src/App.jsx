
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(event) {
    event.preventDefault();

    const text = input.trim();
    if (!text || loading) return;

    const history = [...messages, { role: 'user', content: text }];

    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok) {
        let message = 'Something went wrong. Please try again.';
        try {
          const data = await response.json();
          message = data.error || message;
        } catch {
          // Keep the default error message.
        }
        throw new Error(message);
      }

      if (!response.body) {
        throw new Error('No response stream received.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        fullText += decoder.decode(value, { stream: true });

        setMessages((previous) =>
          previous.map((message, index) =>
            index === previous.length - 1
              ? { ...message, content: fullText }
              : message
          )
        );
      }

      fullText += decoder.decode();

      setMessages((previous) =>
        previous.map((message, index) =>
          index === previous.length - 1
            ? { ...message, content: fullText }
            : message
        )
      );

      if (!fullText.trim()) {
        throw new Error('The AI returned an empty response. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Unable to connect to the AI server.');
      setMessages((previous) => previous.slice(0, -1));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function startNewChat() {
    if (loading) return;
    setMessages([]);
    setInput('');
    setError('');
    inputRef.current?.focus();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
              ✦
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Growfinix AI</h1>
              <p className="text-xs text-slate-500">Powered by Gemini</p>
            </div>
          </div>

          <button
            onClick={startNewChat}
            disabled={loading}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium transition hover:bg-slate-100"
          >
            + New chat
          </button>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-4xl flex-col px-4 sm:px-6">
        {messages.length === 0 ? (
          <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl text-indigo-700">
              ✦
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How can I help you?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              Ask a question, explore an idea, or get help with your work.
            </p>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Explain artificial intelligence simply',
                'Give me a Python programming example',
                'Help me prepare for an interview',
                'Suggest ideas for a college project',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-left text-sm transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  {suggestion}
                  <span className="float-right text-indigo-500">↗</span>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="flex-1 space-y-6 py-8" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    ✦
                  </div>
                )}

                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 sm:max-w-[80%] ${
                    message.role === 'user'
                      ? 'whitespace-pre-wrap rounded-br-md bg-indigo-600 text-white'
                      : 'min-w-0 rounded-bl-md border border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div className="message-content break-words text-sm leading-7">
                      {message.content ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.content}
                        </ReactMarkdown>
                      ) : loading && index === messages.length - 1 ? (
                        <span className="animate-pulse text-slate-500">
                          Thinking...
                        </span>
                      ) : null}
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap text-sm leading-6">
                      {message.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </section>
        )}

        {error && (
          <div
            role="alert"
            className="mb-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
            <button
              onClick={() => setError('')}
              className="ml-3 font-semibold underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <form
          onSubmit={sendMessage}
          className="sticky bottom-0 mt-auto bg-slate-50 pb-4 pt-3"
        >
          <div className="rounded-2xl border border-slate-300 bg-white p-2 shadow-sm focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage(event);
                }
              }}
              placeholder="Message Growfinix AI..."
              rows={2}
              disabled={loading}
              aria-label="Your message"
              className="max-h-40 w-full resize-y bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
            />

            <div className="flex items-center justify-between px-2 pb-1">
              <span className="text-xs text-slate-400">
                Enter to send · Shift + Enter for a new line
              </span>
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:bg-slate-300"
              >
                {loading ? 'Sending...' : 'Send ↑'}
              </button>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">
            AI can make mistakes. Check important information.
          </p>
        </form>
      </main>
    </div>
  );
}
