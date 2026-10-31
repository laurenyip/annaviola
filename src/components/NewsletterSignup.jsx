import { useState } from "react";
import { NEWSLETTER } from "../data/links";

const inputClass =
  "w-full border border-white/15 bg-white/5 px-4 py-3 font-body text-base text-ivory placeholder:text-white/50 focus:border-xray focus:outline-none focus:ring-1 focus:ring-xray/40 aria-[invalid=true]:border-red-400/70";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Email signup. A plain form post is the only integration Buttondown supports: fetch breaks
 * when a subscriber has to clear a CAPTCHA or fix an error on its page. It opens in a new tab
 * so the site stays open. Falls back to mailto if no username is set.
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

  const { buttondownUsername, fallbackEmail } = NEWSLETTER;

  const handleSubmit = (e) => {
    const trimmed = email.trim();

    if (!trimmed) {
      e.preventDefault();
      setStatus("error");
      setMessage("Enter your email address to join the list.");
      return;
    }

    if (!EMAIL_PATTERN.test(trimmed)) {
      e.preventDefault();
      setStatus("error");
      setMessage("That email doesn't look complete. Check it and try again (like name@example.com).");
      return;
    }

    if (!buttondownUsername) {
      e.preventDefault();
      window.location.href = `mailto:${fallbackEmail}?subject=Newsletter%20signup&body=Please%20add%20me%20to%20the%20list%3A%20${encodeURIComponent(trimmed)}`;
      // Nothing is sent until the visitor sends the drafted email, so don't claim success.
      setStatus("pending");
      setMessage(
        `Your email app should open with a message ready to go. Send it to finish joining. No email app? Write to ${fallbackEmail} instead.`
      );
      return;
    }

    // The browser posts the form to Buttondown in a new tab.
    setStatus("pending");
    setMessage("Almost there. Finish in the new tab, then check your inbox for a confirmation email.");
  };

  const isError = status === "error";

  return (
    <div className={className}>
      <form
        action={`https://buttondown.com/api/emails/embed-subscribe/${buttondownUsername}`}
        method="post"
        target="_blank"
        onSubmit={handleSubmit}
        className={compact ? "flex flex-col gap-3 sm:flex-row" : "space-y-3"}
        noValidate
      >
        <input type="hidden" name="tag" value="website" />
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
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="send"
          aria-invalid={isError || undefined}
          aria-describedby={message ? messageId : undefined}
          className={compact ? `${inputClass} sm:flex-1` : inputClass}
        />
        <button
          type="submit"
          className={`btn-luxe btn-luxe-light shrink-0 ${compact ? "sm:px-6" : "w-full"}`}
        >
          <span className="relative z-10">join the list</span>
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

      <p className="mt-3 font-body text-xs leading-relaxed text-white/60">
        EP drops, video premieres, and tour news — no spam, unsubscribe anytime.
      </p>
    </div>
  );
}
