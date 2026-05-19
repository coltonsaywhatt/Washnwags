import { spawnSync } from "node:child_process";
import path from "node:path";

const env = { ...process.env, NEXT_DIST_DIR: ".next-build" };
const binExt = process.platform === "win32" ? ".cmd" : "";
const bin = (name) => path.join(process.cwd(), "node_modules", ".bin", `${name}${binExt}`);

function run(command, args) {
  const result =
    process.platform === "win32"
      ? spawnSync("cmd.exe", ["/d", "/c", "call", command, ...args], {
          env,
          stdio: "inherit"
        })
      : spawnSync(command, args, { env, stdio: "inherit" });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(bin("next"), ["typegen"]);
run(bin("tsc"), ["--noEmit"]);
