import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";

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
    external: ["@formkit/core", "@formkit/inputs", "nanoid"],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true,
        extract: "theme.css",
      }),
    ],
  },
  {
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: ["./theme.css"],
    plugins: [dts(), del({ hook: "buildEnd", targets: "./dist/dts" })],
  },
];
