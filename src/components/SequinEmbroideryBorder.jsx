import { IMAGES } from "../data/content";

/** Ornate filigree side borders — split halves of the side ornament art. */
export default function SequinEmbroideryBorder() {
  return (
    <>
      <BorderSide side="left" src={IMAGES.ornamentBorderLeft} />
      <BorderSide side="right" src={IMAGES.ornamentBorderRight} />
    </>
  );
}

function BorderSide({ side, src }) {
  const isRight = side === "right";

  return (
    <div
      className={`pointer-events-none fixed top-0 z-[5] hidden h-full w-16 md:block lg:w-24 ${
        isRight ? "right-0" : "left-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex h-full flex-col items-center justify-evenly py-8 ${
          isRight ? "pr-1 lg:pr-2" : "pl-1 lg:pl-2"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-auto w-full max-w-[4.5rem] select-none object-contain opacity-90 lg:max-w-[5.5rem]"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
