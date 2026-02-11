"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
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
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:mukrram2003@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailto;
      
      setTimeout(() => {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Failed to open mail client. Please email me directly at mukrram2003@gmail.com");
    }
  };

  if (status === "sent") {
    return (
      <div className="p-12 rounded-[2.5rem] border border-green-100 dark:border-green-500/20 bg-green-50 dark:bg-green-500/5 text-center animate-fadeInUp">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/20">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">Message Ready!</h3>
        <p className="text-green-700 dark:text-green-500/80 mb-8">
          Your email client has been opened with your message. Just hit send there!
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-sm font-bold text-green-800 dark:text-green-400 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
            placeholder="Mukarram Razzaq"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
            placeholder="Let's talk about..."
            required
          />
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-600 text-sm font-semibold animate-shake">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" size={24} />
              Preparing...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
