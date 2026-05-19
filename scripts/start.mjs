import { spawnSync } from "node:child_process";
import path from "node:path";

const env = { ...process.env, NEXT_DIST_DIR: process.env.NEXT_DIST_DIR || ".next" };
const nextBin = path.join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next"
);

const startArgs = ["start", "--hostname", "localhost", "--port", "3000"];
const result =
  process.platform === "win32"
    ? spawnSync("cmd.exe", ["/d", "/c", "call", nextBin, ...startArgs], {
        env,
        stdio: "inherit"
      })
    : spawnSync(nextBin, startArgs, { env, stdio: "inherit" });

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
