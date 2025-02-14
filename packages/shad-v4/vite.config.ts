import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { execSync } from "child_process";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "run-tsc",
      buildStart() {
        execSync("tsc -b ./tsconfig.lib.json");
      },
    },
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
    // tailwindcss(),
    // {
    //   name: "build-tailwind",
    //   buildStart() {
    //     execSync(
    //       "npx @tailwindcss/cli -i ./index.css -o ./output.css --optimize --watch"
    //     );
    //   },
    // },
    {
      name: "css-transform",
      transform(code, id) {
        if (id.endsWith(".css")) {
          return {
            code: code.replace(/\.twps :root/g, ".twps"),
            // .replace(/@layer base\b/g, "@layer bp_base"),
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    cssMinify: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@types/react",
        "@types/react-dom",
      ],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: (chunkInfo) => {
          return "[name].js";
        },
        manualChunks: (id) => {
          if (id.includes("/lucide-react/dist/esm/icons/")) {
            return "lucide-react/icons";
          }
          if (id.includes("node_modules/@radix-ui/")) {
            const match = id.match(/@radix-ui\/([^/]+)/);
            if (match) {
              return `radix-ui/${match[1]}`;
            }
          }
          return null;
        },
      },
    },
  },
});
