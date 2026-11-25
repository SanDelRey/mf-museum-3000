// Museum of the Year 3000: the label a year-3000 museum puts beside an ordinary object today
import { mkdirSync, writeFileSync } from "node:fs";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const label =
  "Air fryer, c. 2021. A second, smaller oven, sold to households to spare the first oven the fifteen minutes it took to become an oven.";

mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", label + "\n", "utf8");
