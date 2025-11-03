// Move globals.css from inside of `cjs` and `esm` directories to package root

import fs from "fs";
import path from "path";

const candidates = [
  path.resolve("dist", "cjs", "globals.css"),
  path.resolve("dist", "esm", "globals.css"),
  // path.resolve("globals.css"),
];

const out = path.resolve("dist", "globals.css");

for (const p of candidates) {
  if (fs.existsSync(p)) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.renameSync(p, out); // moves the first existing one to dist/globals.css
    // optionally remove other duplicates:
    for (const q of candidates) {
      if (q !== p && fs.existsSync(q)) fs.unlinkSync(q);
    }
    console.log(`Moved ${p} -> ${out}`);
    process.exit(0);
  }
}

console.warn(">>> Error: globals.css not found in expected locations");
process.exit(1);
