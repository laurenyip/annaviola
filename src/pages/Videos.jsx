import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { PlayIcon } from "../components/icons";

const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const VIDEOS = [
  { id: "v1", title: "Golden Vanity — Official Music Video", embedId: "dQw4w9WgXcQ" },
  { id: "v2", title: "Velvet Hour (Live Session)", embedId: "dQw4w9WgXcQ" },
  { id: "v3", title: "Behind the Album: Bombay Nights", embedId: "dQw4w9WgXcQ" },
  { id: "v4", title: "Vanity Mirror — Lyric Video", embedId: "dQw4w9WgXcQ" },
  { id: "v5", title: "Starlight Sari — Acoustic", embedId: "dQw4w9WgXcQ" },
  { id: "v6", title: "Making of the Golden Vanity Cover", embedId: "dQw4w9WgXcQ" },
];

function StarDivider() {
  return (
    <div className="flex items-center gap-4 py-10" aria-hidden="true">
      <div className="h-px flex-1 bg-ivory/15" />
      <span className="text-xs leading-none text-silver">★</span>
      <div className="h-px flex-1 bg-ivory/15" />
    </div>
  );
}

function VideoCard({ title, embedId }) {
  return (
    <article className="group mb-6 break-inside-avoid">
      <div className="overflow-hidden rounded border border-transparent transition-colors duration-[250ms] focus-within:border-silver hover:border-silver">
        <div className="relative aspect-video bg-ink/50">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100 group-focus-within:opacity-100">
            <PlayIcon className="h-10 w-10 text-ivory" />
          </div>
        </div>
        <p className="mt-3 font-body text-sm text-ivory/80">{title}</p>
      </div>
    </article>
  );
}

export default function Videos() {
  const [featured, ...rest] = VIDEOS;
  const midpoint = Math.ceil(rest.length / 2);
  const firstGroup = rest.slice(0, midpoint);
  const secondGroup = rest.slice(midpoint);

  return (
    <div className="bg-ink px-6 py-16 text-ivory md:py-24">
      <Seo
        title="Videos"
        description="Watch Anna Viola music videos, live sessions, and behind-the-scenes footage."
        path="/videos"
      />
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="font-display text-5xl italic md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          videos
        </motion.h1>

        <motion.section className="mt-14" {...sectionReveal}>
          <VideoCard {...featured} />
        </motion.section>

        <StarDivider />

        <motion.section {...sectionReveal}>
          <div className="columns-1 gap-6 md:columns-2">
            {firstGroup.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </motion.section>

        <StarDivider />

        <motion.section {...sectionReveal}>
          <div className="columns-1 gap-6 md:columns-2">
            {secondGroup.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
