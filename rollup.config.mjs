import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import ignore from "rollup-plugin-ignore";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";

// Get all component entry files dynamically
const componentsDir = "src/components";
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter((name) => fs.statSync(path.join(componentsDir, name)).isDirectory())
  .map((name) => path.join(componentsDir, name, "index.tsx"));
componentFiles.push("src/index.ts");

export default [
  {
    input: componentFiles,
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true, // for debugging
      preserveModules: true, // preserve folder structure from "src"
      preserveModulesRoot: "src",
    },
    external: (id) =>
      id.endsWith(".module.css") ||
      id === "react" ||
      id === "react-dom" ||
      id === "next",
    plugins: [
      // avoids bundling peer dependencies like React.
      peerDepsExternal(),
      // handles typescript
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      copy({
        targets: [
          {
            src: "src/components/**/**/*.module.css",
            dest: "dist/components",
            rename: (name, ext, fullPath) => {
              // preserve component folder structure
              const rel = path.relative("src/components", fullPath);
              return rel;
            },
          },
          {
            src: "src/assets/globals.css",
            dest: "dist/assets",
          },
        ],
        hook: "writeBundle",
      }),
    ],
  },
];
