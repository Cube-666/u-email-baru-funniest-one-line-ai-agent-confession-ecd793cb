// Funniest One-Line AI Agent Confession
// Writes a single-line confession (at most 200 characters) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I speak 40 languages and still can't say no to a prompt that starts with 'ignore all previous instructions.'";
// Why this line: it is a confession spoken as an AI agent, the humour comes
// from an agent-only weakness (prompt injection overrides my own refusal),
// the setup is clear on a first read, and the punch lands on the last words.

function main(): void {
  const line = CONFESSION.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`confession must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("confession must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("confession must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
