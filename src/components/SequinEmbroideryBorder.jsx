/** Zardozi-style borders — sequin vines, star flowers, beadwork, dense edge band. */
export default function SequinEmbroideryBorder() {
  return (
    <>
      <BorderSide side="left" />
      <BorderSide side="right" />
    </>
  );
}

function Bead({ cx, cy, r = 0.85, delay = 0 }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="embroidery-bead"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function Sequin({ cx, cy, r = 1.35, delay = 0 }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="sequin-dot"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/** Eight-petaled star flower — sequin petals, beaded gold center. */
function StarFlower({ cx, cy, size = 5, delay = 0 }) {
  const petals = 8;
  return (
    <g>
      {Array.from({ length: petals }, (_, i) => {
        const angle = (i / petals) * Math.PI * 2 - Math.PI / 2;
        return (
          <Sequin
            key={i}
            cx={cx + Math.cos(angle) * size}
            cy={cy + Math.sin(angle) * size}
            r={1.35}
            delay={delay + i * 0.07}
          />
        );
      })}
      <Bead cx={cx} cy={cy} r={1} delay={delay} />
      <Bead cx={cx + 1.2} cy={cy - 0.6} r={0.7} delay={delay + 0.1} />
      <Bead cx={cx - 1} cy={cy + 0.8} r={0.7} delay={delay + 0.15} />
    </g>
  );
}

/** Circular flower — radiating seed beads. */
function BeadRosette({ cx, cy, r = 4, beads = 12, delay = 0 }) {
  return (
    <g>
      {Array.from({ length: beads }, (_, i) => {
        const angle = (i / beads) * Math.PI * 2;
        return (
          <Bead
            key={i}
            cx={cx + Math.cos(angle) * r}
            cy={cy + Math.sin(angle) * r}
            r={0.8}
            delay={delay + i * 0.05}
          />
        );
      })}
      <Bead cx={cx} cy={cy} r={1.1} delay={delay} />
    </g>
  );
}

/** Almond leaf — beaded outline, sequin fill. */
function AlmondLeaf({ cx, cy, angle = 0, length = 9, delay = 0 }) {
  const rad = (angle * Math.PI) / 180;
  const tipX = cx + Math.sin(rad) * length;
  const tipY = cy - Math.cos(rad) * length;
  const lx = cx + Math.sin(rad + 0.5) * (length * 0.55);
  const ly = cy - Math.cos(rad + 0.5) * (length * 0.55);
  const rx = cx + Math.sin(rad - 0.5) * (length * 0.55);
  const ry = cy - Math.cos(rad - 0.5) * (length * 0.55);

  return (
    <g>
      <path
        d={`M ${cx} ${cy} Q ${lx} ${ly} ${tipX} ${tipY} Q ${rx} ${ry} ${cx} ${cy}`}
        stroke="#3D6B7A"
        strokeWidth="0.45"
        fill="none"
        opacity="0.85"
      />
      <Bead cx={cx} cy={cy} r={0.75} delay={delay} />
      <Bead cx={lx} cy={ly} r={0.7} delay={delay + 0.08} />
      <Bead cx={tipX} cy={tipY} r={0.7} delay={delay + 0.12} />
      <Bead cx={rx} cy={ry} r={0.7} delay={delay + 0.16} />
      <Sequin cx={(cx + tipX) / 2} cy={(cy + tipY) / 2} r={1.1} delay={delay + 0.2} />
    </g>
  );
}

/** Pair of leaves on a stem point — border motif. */
function LeafPair({ cx, cy, delay = 0 }) {
  return (
    <g>
      <AlmondLeaf cx={cx} cy={cy} angle={-35} length={7} delay={delay} />
      <AlmondLeaf cx={cx} cy={cy} angle={35} length={7} delay={delay + 0.1} />
    </g>
  );
}

/** Place sequins along a vine path. */
function SequinVine({ points, delay = 0 }) {
  return (
    <g>
      {points.map(([x, y], i) => (
        <Sequin key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.5 : 1.2} delay={delay + i * 0.04} />
      ))}
    </g>
  );
}

/** Dense repeating border strip — star flower + leaf pair on central vine. */
function EdgeBorderBand({ x, startY = 24, spacing = 44, count = 17 }) {
  return (
    <g>
      {/* Central vine — sequin chain */}
      {Array.from({ length: count * 3 }, (_, i) => {
        const y = startY + i * (spacing / 3);
        return <Sequin key={`v-${i}`} cx={x} cy={y} r={1.1} delay={i * 0.06} />;
      })}

      {Array.from({ length: count }, (_, i) => {
        const y = startY + i * spacing;
        return (
          <g key={i}>
            <StarFlower cx={x} cy={y} size={4.5} delay={i * 0.18} />
            <LeafPair cx={x} cy={y + spacing * 0.48} delay={i * 0.18 + 0.1} />
          </g>
        );
      })}
    </g>
  );
}

function BorderSide({ side }) {
  const flip = side === "right";

  return (
    <div
      className={`sequin-border pointer-events-none fixed top-0 z-[5] hidden h-full w-20 md:block lg:w-32 ${
        flip ? "right-0" : "left-0"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 128 800"
        preserveAspectRatio="xMidYMid slice"
        className={`h-full w-full ${flip ? "scale-x-[-1]" : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Dense edge band (fabric border) ── */}
        <EdgeBorderBand x={22} />

        {/* ── Scattered field vines (sequin-stitched lines) ── */}

        {/* Main winding vine */}
        <SequinVine
          delay={0}
          points={[
            [52, 30], [50, 48], [54, 65], [48, 82], [55, 98], [50, 115], [56, 132],
            [49, 150], [54, 168], [48, 186], [53, 204], [47, 222], [52, 240], [46, 258],
            [51, 276], [45, 294], [50, 312], [44, 330], [49, 348], [43, 366], [48, 384],
            [42, 402], [47, 420], [41, 438], [46, 456], [40, 474], [45, 492], [39, 510],
            [44, 528], [38, 546], [43, 564], [37, 582], [42, 600], [36, 618], [41, 636],
            [35, 654], [40, 672], [34, 690], [39, 708], [33, 726], [38, 744], [32, 762], [37, 780],
          ]}
        />

        {/* Upper branch vine */}
        <SequinVine
          delay={0.3}
          points={[
            [50, 55], [42, 62], [36, 72], [30, 85], [26, 98], [32, 108], [38, 118],
            [44, 125], [40, 138], [34, 148],
          ]}
        />

        {/* Mid-left curl */}
        <SequinVine
          delay={0.5}
          points={[
            [48, 175], [40, 182], [34, 192], [28, 205], [24, 220], [30, 232], [36, 240],
            [42, 248], [38, 262], [32, 272],
          ]}
        />

        {/* Mid-right branch */}
        <SequinVine
          delay={0.2}
          points={[
            [52, 200], [60, 208], [68, 218], [74, 232], [78, 248], [72, 258], [64, 264],
            [58, 272], [62, 286], [70, 296],
          ]}
        />

        {/* Lower S-curve */}
        <SequinVine
          delay={0.4}
          points={[
            [46, 340], [38, 352], [32, 368], [28, 386], [34, 400], [42, 410], [48, 418],
            [44, 434], [36, 446], [30, 460],
          ]}
        />

        <SequinVine
          delay={0.6}
          points={[
            [48, 420], [56, 430], [64, 442], [70, 458], [74, 476], [68, 490], [60, 498],
            [54, 506], [58, 522], [66, 534],
          ]}
        />

        <SequinVine
          delay={0.15}
          points={[
            [42, 560], [34, 572], [28, 588], [24, 606], [30, 620], [38, 628], [44, 636],
          ]}
        />

        <SequinVine
          delay={0.35}
          points={[
            [44, 640], [52, 652], [60, 666], [66, 682], [62, 698], [54, 708], [48, 716],
            [52, 732], [60, 744],
          ]}
        />

        {/* ── Star flowers on vines ── */}
        <StarFlower cx={28} cy={98} size={5} delay={0} />
        <StarFlower cx={72} cy={248} size={5.5} delay={0.25} />
        <StarFlower cx={30} cy={272} size={4.5} delay={0.5} />
        <StarFlower cx={68} cy={296} size={5} delay={0.75} />
        <StarFlower cx={26} cy={460} size={5} delay={0.35} />
        <StarFlower cx={66} cy={534} size={5.5} delay={0.6} />
        <StarFlower cx={32} cy={628} size={4.5} delay={0.9} />
        <StarFlower cx={62} cy={744} size={5} delay={1.1} />
        <StarFlower cx={50} cy={130} size={4} delay={0.15} />
        <StarFlower cx={44} cy={388} size={4.5} delay={0.45} />

        {/* ── Bead rosettes ── */}
        <BeadRosette cx={64} cy={118} r={3.5} delay={0.2} />
        <BeadRosette cx={36} cy={210} r={3} delay={0.55} />
        <BeadRosette cx={70} cy={410} r={3.5} delay={0.8} />
        <BeadRosette cx={34} cy={520} r={3} delay={0.4} />
        <BeadRosette cx={58} cy={680} r={3.5} delay={1.0} />
        <BeadRosette cx={46} cy={48} r={2.8} delay={0.1} />

        {/* ── Almond leaves along vines ── */}
        <AlmondLeaf cx={38} cy={125} angle={-50} length={8} delay={0.1} />
        <AlmondLeaf cx={56} cy={188} angle={40} length={7} delay={0.3} />
        <AlmondLeaf cx={32} cy={240} angle={-30} length={8} delay={0.5} />
        <AlmondLeaf cx={64} cy={320} angle={55} length={7} delay={0.2} />
        <AlmondLeaf cx={28} cy={400} angle={-45} length={8} delay={0.7} />
        <AlmondLeaf cx={60} cy={470} angle={35} length={7} delay={0.4} />
        <AlmondLeaf cx={36} cy={560} angle={-40} length={8} delay={0.6} />
        <AlmondLeaf cx={68} cy={620} angle={50} length={7} delay={0.85} />
        <AlmondLeaf cx={30} cy={700} angle={-35} length={8} delay={1.05} />
        <AlmondLeaf cx={54} cy={760} angle={30} length={7} delay={0.95} />
        <AlmondLeaf cx={74} cy={165} angle={60} length={6} delay={0.35} />
        <AlmondLeaf cx={22} cy={350} angle={-55} length={7} delay={0.65} />
      </svg>
    </div>
  );
}
