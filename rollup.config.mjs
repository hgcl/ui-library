import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
     external: [
    "react",
    "react-dom",
    "next",
  ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      // Module CSS
      postcss({
        include: "**/*.module.css",
        modules: true,
        extensions: [".css"],
        inject: true,
        extract: false,
      }),
      // Globals CSS
      postcss({
        include: ["src/assets/globals.css"],
        modules: false,               
        extensions: [".css"],
        inject: false,                // don't inject global CSS into JS
        extract: "globals.css",   // extract all global CSS into this file
      }),
        typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsc", "**/*.test.ts", "**/*.stories.ts"],
      }),
    ],
  },
  {
    // Copy `types` dir from inside of `esm` dir to root `dist`
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
