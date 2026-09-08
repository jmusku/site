import type { NextRequest } from "next/server";
import { buildSystemPrompt } from "@/lib/systemPrompt";

export const runtime = "nodejs";

const MODEL = "nvidia/nemotron-3-super-120b-a12b:free";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MAX_MESSAGES = 16;
const MAX_MESSAGE_LENGTH = 2000;
const RETRYABLE_STATUSES = new Set([429, 502, 503, 504]);
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 400;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function sanitizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response("Chat is not configured on the server.", { status: 500 });
  }

  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid request body.", { status: 400 });
  }

  const messages = sanitizeMessages(body?.messages);
  if (messages.length === 0) {
    return new Response("No messages provided.", { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "http://localhost:3000";
  const requestBody = JSON.stringify({
    model: MODEL,
    messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    stream: true,
    temperature: 0.6,
    max_tokens: 600,
    reasoning: { effort: "low", exclude: true },
  });

  let upstream: Response | undefined;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": origin,
          "X-Title": "Jeevan Musku - Digital Twin",
        },
        body: requestBody,
      });

      if (res.ok && res.body) {
        upstream = res;
        break;
      }

      const text = await res.text().catch(() => "");
      console.error(`OpenRouter error (attempt ${attempt})`, res.status, text);

      if (!RETRYABLE_STATUSES.has(res.status) || attempt === MAX_ATTEMPTS) {
        return new Response(
          "The digital twin is temporarily unavailable. Please try again shortly.",
          { status: 502 }
        );
      }
    } catch (err) {
      console.error(`OpenRouter request failed (attempt ${attempt})`, err);
      if (attempt === MAX_ATTEMPTS) {
        return new Response(
          "The digital twin is temporarily unavailable. Please try again shortly.",
          { status: 502 }
        );
      }
    }

    await sleep(RETRY_DELAY_MS * attempt);
  }

  if (!upstream) {
    return new Response("The digital twin is temporarily unavailable. Please try again shortly.", {
      status: 502,
    });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const parsed = JSON.parse(data);
              const delta: string | undefined = parsed?.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // ignore malformed / partial SSE lines
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
    cancel() {
      upstream.body?.cancel().catch(() => {});
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
