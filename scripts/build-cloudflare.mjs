import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const apiDir = path.join(root, "src", "app", "api");
const backupDir = path.join(root, "src", ".api-export-backup");

if (fs.existsSync(backupDir)) {
  fs.rmSync(backupDir, { recursive: true, force: true });
}

let moved = false;
try {
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, backupDir);
    moved = true;
  }

  execSync("npx next build", {
    stdio: "inherit",
    env: { ...process.env, CLOUDFLARE_EXPORT: "true" },
  });
} finally {
  if (moved && fs.existsSync(backupDir)) {
    fs.renameSync(backupDir, apiDir);
  }
}
