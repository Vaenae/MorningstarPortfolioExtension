/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require("esbuild")
const sassPlugin = require("esbuild-plugin-sass")
require("./scripts/copy")

esbuild
  .build({
    define: { "process.env.NODE_ENV": '"development"' },
    entryPoints: ["src/main.tsx"],
    bundle: true,
    outdir: "dist",
    sourcemap: true,
    target: "es2017",
    plugins: [sassPlugin()],
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error)
        else console.error("watch build succeeded:", result)
      }
    }
  })
  .catch(e => console.error(e.message))
  