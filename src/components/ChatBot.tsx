"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type ChatRole = "bot" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const QUICK_PROMPTS = [
  "Tell me about Golden Viral",
  "What’s Dubai chocolate?",
  "Shipping info",
  "Gift ideas",
] as const;

function botReply(input: string): ChatMessage {
  const normalized = input.toLowerCase();
  const id = crypto.randomUUID();

  if (
    normalized.includes("ship") ||
    normalized.includes("delivery") ||
    normalized.includes("free")
  ) {
    return {
      id,
      role: "bot",
      text: "We ship DTC across the US. Free shipping on orders over $69.",
    };
  }

  if (
    normalized.includes("dubai") ||
    normalized.includes("chocolate") ||
    normalized.includes("flavor")
  ) {
    return {
      id,
      role: "bot",
      text: "Golden Viral makes Dubai-style chocolate — pistachio, knafeh, and signature creations inspired by the city’s sweet culture. Browse the shop above to explore flavors.",
    };
  }

  if (
    normalized.includes("gift") ||
    normalized.includes("recommend") ||
    normalized.includes("best")
  ) {
    return {
      id,
      role: "bot",
      text: "Our Signature Creations make great gifts. Take a look at the collection on the page and pick what speaks to you.",
    };
  }

  if (
    normalized.includes("about") ||
    normalized.includes("story") ||
    normalized.includes("golden viral")
  ) {
    return {
      id,
      role: "bot",
      text: "Golden Viral brings Dubai chocolate to you — craft bars and bites made for sharing. Scroll to Our Story for more.",
    };
  }

  if (normalized.includes("checkout") || normalized.includes("pay") || normalized.includes("buy")) {
    return {
      id,
      role: "bot",
      text: "This is a simulated shopping assistant for the demo. Checkout isn’t enabled — browse the shop and add items to your bag to explore the experience.",
    };
  }

  return {
    id,
    role: "bot",
    text: "Happy to help. Ask about flavors, shipping, gifts, or our story — or browse the collection on the page.",
  };
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Welcome to Golden Viral. How can I help you?",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const pushUserAndReply = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text: trimmed },
      botReply(trimmed),
    ]);
    setInput("");
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    pushUserAndReply(input);
  };

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="animate-fade-in flex h-[min(560px,72vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden border border-gold/45 bg-emerald-deep/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          <header className="flex items-center justify-between border-b border-gold/25 bg-black/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center border border-gold/50 text-gold">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h2 id={titleId} className="text-sm font-medium text-ivory">
                  Golden Concierge
                </h2>
                <p className="text-[0.65rem] tracking-[0.14em] text-champagne/80 uppercase">
                  Simulated demo chat
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-gold hover:bg-gold/10"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-gold text-obsidian"
                      : "border border-gold/30 bg-black/35 text-ivory/90"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gold/20 px-3 pt-2 pb-1">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => pushUserAndReply(prompt)}
                  className="border border-gold/35 px-2 py-1 text-[0.62rem] tracking-[0.08em] text-champagne uppercase hover:border-gold hover:text-gold"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2 pb-2">
              <label htmlFor="chatbot-input" className="sr-only">
                Message
              </label>
              <input
                id="chatbot-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="How can I help you?"
                className="min-h-10 flex-1 border border-gold/30 bg-black/40 px-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="btn-gold inline-flex min-h-10 w-10 items-center justify-center"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="chat-fab-glow btn-gold relative flex h-14 w-14 items-center justify-center rounded-full"
        aria-label={open ? "Close shopping chat" : "Open shopping chat"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
