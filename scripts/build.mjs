import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";
import path from "node:path";

const buildDir = process.env.NEXT_DIST_DIR || ".next";
const env = { ...process.env, NEXT_DIST_DIR: buildDir };
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

rmSync(buildDir, { force: true, recursive: true });
run(bin("next"), ["build"]);
run(bin("next-sitemap"), ["--config", "next-sitemap.config.js"]);
