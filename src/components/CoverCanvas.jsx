import { useEffect, useRef } from "react";

/**
 * Static cover art with optional muted canvas video.
 * Pass `playing` from the parent card hover so the whole cover triggers it.
 */
export default function CoverCanvas({
  image,
  canvas,
  playing = false,
  alt = "",
  className = "",
  imgClassName = "photo-bw h-full w-full object-cover",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canvas) return;

    if (playing) {
      video.muted = true;
      video.volume = 0;
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise?.catch) playPromise.catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [playing, canvas]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {image ? (
        <img src={image} alt={alt} className={imgClassName} />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-white/5" />
      )}

      {canvas && (
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={canvas}
          muted
          defaultMuted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
