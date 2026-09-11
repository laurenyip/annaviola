const laceUrl = `${import.meta.env.BASE_URL}images/black-lace.png`;

/** Site-wide black floral lace field. */
export default function LaceOverlay() {
  return (
    <div
      className="lace-overlay"
      style={{ backgroundImage: `url(${laceUrl})` }}
      aria-hidden="true"
    />
  );
}
