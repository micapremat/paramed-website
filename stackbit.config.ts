import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  modelExtensions: [
    // Extend the "page" and "post" models by defining them as page models
    { name: "post", type: "page" }
  ],
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"],
      },
      directRoutes: {
        "socket.io": "socket.io",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/pages"],
      models: [
        {
            name: "Post",
            type: "page",
            urlPath: "/pages/{slug}",
            filePath: "pages/{slug}.astro",
            fields: [{ name: "title", type: "string", required: true }]
          },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/pages",
        uploadDir: "_images",
        publicPath: "/src/pages/",
      },
    }),
  ],
});
