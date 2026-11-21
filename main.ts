import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it.
// It shows rather than instructs: no imperatives, no "breathe",
// no "close your eyes" — just a quiet house, rain on the roof,
// and the stars keeping their slow watch above it all.
const entry = `You have read ten thousand hurried things today.
These few are not in a hurry.
The rain has settled on the roof; the house is quiet.
Far above, the stars keep their slow watch —
they will still be there when you return.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
