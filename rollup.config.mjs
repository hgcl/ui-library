import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";

// Get all component entry files dynamically
const componentsDir = "src/components";
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter((name) => fs.statSync(path.join(componentsDir, name)).isDirectory())
  .map((name) => path.join(componentsDir, name, "index.tsx"));

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
    external: [/\.css$/, "react", "react-dom", "next"],
    plugins: [
      // avoids bundling peer dependencies like React.
      peerDepsExternal(),
      // lets Rollup handle node_modules imports.
      resolve(),
      commonjs(),
      // handles typescript
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [
          { src: "src/**/*.module.css", dest: "dist" },
          { src: "src/assets/globals.css", dest: "dist" },
        ],
        flatten: false,
      }),
    ],
  },
  // Type declarations
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
