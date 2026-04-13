"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Failed to send. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
          <span className="text-terminal">&gt;</span> Contact
        </h2>
        <div className="w-16 h-px bg-terminal/50 mb-4" />
        <p className="text-text-secondary text-sm mb-10">
          Have a project in mind? Get in touch and let&apos;s build something.
        </p>

        {status === "success" ? (
          <div className="border border-terminal/30 bg-terminal/5 p-8 text-center">
            <p className="font-[family-name:var(--font-jetbrains)] text-terminal text-lg mb-2">
              Message sent.
            </p>
            <p className="text-text-secondary text-sm">
              I&apos;ll get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary hover:text-terminal transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-bg-card border border-border focus:border-terminal/50 text-text-primary font-[family-name:var(--font-jetbrains)] text-sm px-4 py-3 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-bg-card border border-border focus:border-terminal/50 text-text-primary font-[family-name:var(--font-jetbrains)] text-sm px-4 py-3 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-bg-card border border-border focus:border-terminal/50 text-text-primary font-[family-name:var(--font-jetbrains)] text-sm px-4 py-3 outline-none transition-colors resize-y"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "error" && (
              <p className="font-[family-name:var(--font-jetbrains)] text-xs text-red-400">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="font-[family-name:var(--font-jetbrains)] text-sm bg-terminal text-bg-primary font-semibold px-6 py-3 hover:bg-terminal-dim disabled:opacity-50 transition-colors cursor-pointer disabled:cursor-wait"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
