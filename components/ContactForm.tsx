"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    // simple email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email address.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setStatus("sending");

    try {
      // mailto fallback: open user's email client with prefilled data
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
      // Try to open mailto - this will open user's email client
      window.location.href = mailto;
      setStatus("sent");
      // keep fields or reset
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Failed to open mail client. Please email me directly at mukrram2003@gmail.com");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-4">
        <label className="flex flex-col text-sm">
          <span className="mb-1">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white"
            placeholder="Full name"
            required
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border rounded px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="border rounded px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white"
            placeholder="How can I help you?"
            required
          />
        </label>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && <div className="text-sm text-green-600">Message handled by your mail client.</div>}
          {status === "error" && <div className="text-sm text-red-600">{error}</div>}
        </div>
      </div>
    </form>
  );
}
