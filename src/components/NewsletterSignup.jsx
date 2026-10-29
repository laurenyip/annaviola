import { useState } from "react";
import { NEWSLETTER } from "../data/links";

const inputClass =
  "w-full border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-ivory placeholder:text-white/30 focus:border-xray focus:outline-none focus:ring-1 focus:ring-xray/40 aria-[invalid=true]:border-red-400/70";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Email signup — posts to Buttondown when configured, otherwise opens a mailto fallback.
 */
export default function NewsletterSignup({
  className = "",
  compact = false,
  id = "newsletter-email",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const messageId = `${id}-message`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus("error");
      setMessage("Enter your email address to join the list.");
      return;
    }

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setMessage("That email doesn't look complete. Check it and try again (like name@example.com).");
      return;
    }

    const { buttondownUsername, fallbackEmail } = NEWSLETTER;

    if (!buttondownUsername) {
      window.location.href = `mailto:${fallbackEmail}?subject=Newsletter%20signup&body=Please%20add%20me%20to%20the%20list%3A%20${encodeURIComponent(trimmed)}`;
      // Nothing is sent until the visitor sends the drafted email, so don't claim success.
      setStatus("pending");
      setMessage(
        `Your email app should open with a message ready to go. Send it to finish joining. No email app? Write to ${fallbackEmail} instead.`
      );
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(
        `https://buttondown.email/api/emails/embed-subscribe/${buttondownUsername}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: trimmed, tag: "website" }),
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

  const isError = status === "error";

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={compact ? "flex flex-col gap-3 sm:flex-row" : "space-y-3"}
        noValidate
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="your@email.com"
          required
          autoComplete="email"
          aria-invalid={isError || undefined}
          aria-describedby={message ? messageId : undefined}
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
          id={messageId}
          className={`mt-3 font-body text-sm ${isError ? "text-red-300" : "text-white/75"}`}
          role={isError ? "alert" : "status"}
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
