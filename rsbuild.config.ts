import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    htmlPlugin: false,
    rspack: {
      optimization: {
        concatenateModules: true,
      },
    },
  },
});
