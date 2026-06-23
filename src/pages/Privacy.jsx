import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const sections = [
  {
    id: "data-use",
    title: "How We Use Your Data",
    body: [
      "Anna Viola is based in Vancouver, British Columbia. This website is operated from Canada.",
      "If you subscribe to updates or contact us by email, we use your information only to respond to you, send news about releases and shows, and improve this site. We do not sell personal information.",
      "We may use basic analytics to understand how visitors use annaviola.com. Any third-party tools we use are configured to minimize personal data collection where possible.",
    ],
  },
  {
    id: "limit-use",
    title: "Limit Use of My Personal Information",
    body: [
      "You may ask us to limit how your personal information is used for marketing or promotional messages at any time.",
      "To unsubscribe from emails, use the link in any message we send, or contact us directly. We will honour your request promptly.",
    ],
  },
  {
    id: "bc-rights",
    title: "Your BC Privacy Rights",
    body: [
      "Under British Columbia's Personal Information Protection Act (PIPA) and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to know what personal information we collect, request access to it, ask for corrections, and request deletion where the law allows.",
      "If you are not satisfied with our response, you may contact the Office of the Information and Privacy Commissioner for British Columbia.",
    ],
    link: {
      label: "Office of the Information and Privacy Commissioner for BC",
      href: "https://www.oipc.bc.ca/",
    },
  },
];

export default function Privacy() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Seo title="Privacy Policy" description="Privacy Policy for annaviola.com" path="/privacy" />
      <h1 className="font-display text-3xl text-ink md:text-4xl">Privacy Policy</h1>
      <p className="mt-6 font-body text-sm leading-relaxed text-ink/70">
        Anna Viola respects your privacy. This policy describes how information is collected and
        used on annaviola.com in accordance with Canadian federal law and British Columbia
        privacy law. This site is operated from Vancouver, BC.
      </p>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-20">
          <h2 className="font-display text-xl text-ink">{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-3 font-body text-sm leading-relaxed text-ink/70">
              {paragraph}
            </p>
          ))}
          {section.link && (
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
              <a
                href={section.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                {section.link.label}
              </a>
            </p>
          )}
        </section>
      ))}

      <p className="mt-10 font-body text-sm text-ink/70">
        To exercise your rights or send feedback, contact{" "}
        <a href="mailto:hello@annaviola.com" className="underline underline-offset-2">
          hello@annaviola.com
        </a>
        . See also our{" "}
        <Link to="/terms" className="underline underline-offset-2">
          Terms and Conditions
        </Link>
        .
      </p>
    </div>
  );
}
