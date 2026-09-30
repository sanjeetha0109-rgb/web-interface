import { cp, mkdir, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(repositoryRoot, "dist");
const staticProjects = ["project-1", "project-2"];
const viteProjects = Array.from({ length: 8 }, (_, index) => {
  const name = `project-${index + 3}`;
  return { name, directory: join(repositoryRoot, name, name) };
});

function runNpm(args, directory) {
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(command, args, {
    cwd: directory,
    shell: process.platform === "win32",
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`Command failed in ${directory}: npm ${args.join(" ")}`);
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, "projects"), { recursive: true });
await cp(join(repositoryRoot, "index.html"), join(outputRoot, "index.html"));

for (const name of staticProjects) {
  const source = join(repositoryRoot, name);
  const destination = join(outputRoot, "projects", name);
  await mkdir(destination, { recursive: true });
  for (const file of ["index.html", "style.css", name === "project-1" ? "javascript.js" : "script.js"]) {
    await cp(join(source, file), join(destination, file));
  }
}

for (const project of viteProjects) {
  runNpm(["ci"], project.directory);
  runNpm(["run", "build", "--", "--base", "./"], project.directory);
  await cp(join(project.directory, "dist"), join(outputRoot, "projects", project.name), {
    recursive: true,
  });
}

console.log(`Static deployment files staged in ${outputRoot}`);