import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Terms() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Seo title="Terms and Conditions" description="Terms and Conditions for annaviola.com" path="/terms" />
      <h1 className="font-display text-3xl text-ivory md:text-4xl">Terms and Conditions</h1>
      <p className="mt-6 font-body text-sm leading-relaxed text-white/65">
        By using annaviola.com, you agree to these terms. This website provides information about
        Anna Viola&apos;s music, videos, and career. All music, images, logos, and branding are
        protected by applicable copyright and trademark law in Canada.
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-white/65">
        External links (streaming platforms, social media, and similar services) are provided for
        convenience and are governed by those services&apos; own terms and privacy policies.
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-white/65">
        This site is operated from Vancouver, British Columbia, Canada. These terms are governed by
        the laws of the Province of British Columbia and the federal laws of Canada applicable
        therein.
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-white/65">
        For questions, contact{" "}
        <a href="mailto:hello@annaviola.com" className="text-xray underline underline-offset-2">
          hello@annaviola.com
        </a>
        . See our{" "}
        <Link to="/privacy" className="text-xray underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        for how we handle personal information under BC and Canadian privacy law.
      </p>
    </div>
  );
}
