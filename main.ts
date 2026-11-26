import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Tonight in Grindlewick: 12 centimetres of sideways rain, a high of 7 degrees, and fog thick enough to lose the town hall in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
