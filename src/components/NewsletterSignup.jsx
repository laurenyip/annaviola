import { useState } from "react";
import { NEWSLETTER } from "../data/links";

const inputClass =
  "w-full border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-ivory placeholder:text-white/30 focus:border-xray focus:outline-none focus:ring-1 focus:ring-xray/40";

/**
 * Email signup — posts to Buttondown when configured, otherwise opens a mailto fallback.
 */
export default function NewsletterSignup({ className = "", compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    const { buttondownUsername, fallbackEmail } = NEWSLETTER;

    if (!buttondownUsername) {
      window.location.href = `mailto:${fallbackEmail}?subject=Newsletter%20signup&body=Please%20add%20me%20to%20the%20list%3A%20${encodeURIComponent(email)}`;
      setStatus("success");
      setMessage("Opening your email app to complete signup.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(
        `https://buttondown.email/api/emails/embed-subscribe/${buttondownUsername}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, tag: "website" }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. Watch your inbox.");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || data.email?.[0] || "Signup failed");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={compact ? "flex flex-col gap-3 sm:flex-row" : "space-y-3"}
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="your@email.com"
          required
          autoComplete="email"
          className={compact ? `${inputClass} sm:flex-1` : inputClass}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className={`btn-luxe btn-luxe-light shrink-0 ${compact ? "sm:px-6" : "w-full"}`}
          disabled={status === "loading"}
        >
          <span className="relative z-10">
            {status === "loading" ? "joining…" : "join the list"}
          </span>
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 font-body text-sm ${
            status === "error" ? "text-red-400/80" : "text-white/50"
          }`}
          role="status"
        >
          {message}
        </p>
      )}

      <p className="mt-3 font-body text-[11px] leading-relaxed text-white/35">
        EP drops, video premieres, and tour news — no spam, unsubscribe anytime.
      </p>
    </div>
  );
}
