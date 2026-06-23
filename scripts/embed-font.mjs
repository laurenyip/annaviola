import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const b64 = fs.readFileSync(path.join(root, "public/fonts/UVNMuaThu.woff2")).toString("base64");

const css = `@font-face {
  font-family: UVNMuaThu;
  src: url(data:font/woff2;base64,${b64}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;

fs.writeFileSync(path.join(root, "src/fonts.css"), css);
console.log(`Wrote src/fonts.css (${css.length} chars)`);
