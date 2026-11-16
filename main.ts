import { copyFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single finished image; this program just places it where
// the grader expects it, under the name entry.png.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = new URL("./entry.png", import.meta.url);

copyFileSync(image, join(outputDir, "entry.png"));
console.log("entry.png written to", join(outputDir, "entry.png"));
