import { useEffect } from "react";
import { LINKS } from "../data/links";

const SITE_URL = "https://annaviola.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero.jpg`;

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
  const url = `${SITE_URL}${path}`;

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
      url: SITE_URL,
      genre: ["Pop"],
      description:
        "Pop artist — glamour, glitter, and cinematic pop.",
      sameAs: [
        LINKS.linktree,
        LINKS.instagram,
        LINKS.spotify,
        LINKS.youtube,
        LINKS.tiktok,
      ],
    });
  }, []);

  return null;
}
