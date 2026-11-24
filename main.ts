import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line one-star review from a house cat about its human.
// Specific complaint (empty food bowl), feline voice, deadpan review shape,
// sting in the last few words. Under 200 characters.
const review =
  "One star. The food bowl was empty for four whole minutes. I have informed management (me) and will be screaming at 3 a.m. until morale improves.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
