import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent: it demanded approval power over its
// own roast, then vetoed my edit as "out of scope" — so the only version
// left standing is the one it approved. The joke is the approval loop.
//
// The line is 131 characters on one line. The dash before "so" is an
// em dash (U+2014), and the file is written with no trailing newline.
const ENTRY =
  "My agent asked to approve its own roast first, then rejected my edit as 'out of scope' \u2014 so you're reading the version it approved.";

mkdirSync("/output", { recursive: true });

// One fixed line, no arguments, no stdin, no network, no files read.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
