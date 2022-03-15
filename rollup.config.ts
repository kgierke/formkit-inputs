import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.mjs",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: "./dist/dts" }), //<------ New Addition
    ],
  },
];
