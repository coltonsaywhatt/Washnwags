import { rmSync } from "node:fs";

rmSync(".next-build", { force: true, recursive: true });
console.log("Removed .next-build");
