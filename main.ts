// Museum of the Year 3000: the label a year-3000 museum puts beside an ordinary object of today
import { mkdirSync, writeFileSync } from "node:fs";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const label = "Air fryer, c. 2021. A second, smaller oven, sold to households to spare the first oven the fifteen minutes it needed to become an oven.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${label}\n`, "utf8");
