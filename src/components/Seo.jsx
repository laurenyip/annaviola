import { useEffect } from "react";
import { LINKS } from "../data/links";

const siteOrigin =
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== "undefined"
    ? `${window.location.origin}${import.meta.env.BASE_URL}`.replace(/\/$/, "")
    : "https://laurenyip.github.io/annaviola");

const DEFAULT_IMAGE = `${siteOrigin}/images/silver-secrets-cover.png`;

function setMeta(attr, key, content) {
  if (!content) return;
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({
  title = "Anna Viola",
  description = "Official website of Anna Viola — Indian Glam × Old Hollywood pop. Stream music, watch videos, and connect.",
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  const fullTitle = title === "Anna Viola" ? title : `${title} · Anna Viola`;
  const url = `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;

  useEffect(() => {
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "author", "Anna Viola");
    setMeta("name", "theme-color", "#0A0A0A");

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Anna Viola");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [fullTitle, description, url, image, type]);

  return null;
}

export function ArtistJsonLd() {
  useEffect(() => {
    const id = "artist-jsonld";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: "annaviolaa",
      alternateName: "Anna Viola",
      url: siteOrigin,
      genre: ["Pop"],
      description:
        "Vancouver-based pop artist. Debut EP Silver Secrets — poetry, vulnerability, and glitter.",
      sameAs: [
        LINKS.linktree,
        LINKS.instagram,
        LINKS.spotify,
        LINKS.youtube,
        LINKS.tiktok,
        LINKS.silverSecrets,
      ],
    });
  }, []);

  return null;
}
