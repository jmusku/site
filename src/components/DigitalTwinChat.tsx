"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { useChatWidget } from "@/components/ChatWidgetContext";
import { profile } from "@/lib/data";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What's your experience with Azure and AWS?",
  "Tell me about your leadership style.",
  "What have you built at Webstercare?",
  "What certifications do you hold?",
];

const INTRO: Message = {
  role: "assistant",
  content:
    "Hi, I'm the digital twin of Jeevan Musku — trained on his career history. Ask me about his roles, projects, skills, or leadership experience.",
};

export function DigitalTwinChat() {
  const { isOpen, close, toggle } = useChatWidget();
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const assistantTextRef = useRef("");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => textareaRef.current?.focus(), 200);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || isStreaming) return;

    setError(null);
    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.filter((m) => m.role === "user" || m.role === "assistant"),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(await res.text().catch(() => "Request failed"));
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      assistantTextRef.current = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantTextRef.current += decoder.decode(value, { stream: true });
        const content = assistantTextRef.current;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content };
          return updated;
        });
      }

      if (!assistantTextRef.current.trim()) {
        throw new Error("Empty response");
      }
    } catch {
      setError("The digital twin is temporarily unavailable. Try again, or reach Jeevan directly.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsStreaming(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Close digital twin chat" : "Open digital twin chat"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-paper text-ink shadow-lg shadow-black/40 transition-transform hover:-translate-y-0.5 sm:h-16 sm:w-16"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-lime" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-24 z-[60] flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-2xl shadow-black/60 sm:inset-auto sm:right-6 sm:bottom-28 sm:h-[600px] sm:w-[400px]"
          >
            <div className="flex items-center gap-3 border-b border-line bg-panel-raised px-5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-ink text-lime">
                <Sparkles size={16} />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-paper">Digital Twin</p>
                <p className="truncate font-mono text-[11px] uppercase tracking-widest text-muted">
                  AI trained on {profile.name.split(" ")[0]}&apos;s career
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-panel hover:text-paper"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-violet text-white"
                        : "border border-line bg-panel-raised text-paper"
                    }`}
                  >
                    {message.content || (
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:300ms]" />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                  {error}
                </p>
              )}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => sendMessage(s)}
                      className="rounded-full border border-line-strong px-3 py-1.5 text-left font-mono text-[11px] text-muted transition-colors hover:border-lime hover:text-lime"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-line bg-panel-raised p-3">
              <div className="flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Ask about my career..."
                  className="max-h-24 flex-1 resize-none rounded-xl border border-line bg-ink px-3 py-2.5 text-sm text-paper placeholder:text-muted focus:border-lime/60 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !input.trim()}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper text-ink transition-opacity disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 px-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                AI-generated, may be imperfect · via OpenRouter
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
