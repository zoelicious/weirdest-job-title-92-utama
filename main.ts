import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path anchor: this file lives at the repo root, so any
// relative-looking path below is resolved from an absolute base.
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const ENTRY = "Certified Cereal Milk Sommelier";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
