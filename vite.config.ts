// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build (.github/workflows/deploy.yml sets these). Pages serves plain files from
// https://<user>.github.io/<repo>/, so every page is written to HTML ahead of time and all
// links are prefixed with the repository path. Without GITHUB_PAGES the normal build is untouched.
const githubPages = process.env["GITHUB_PAGES"] === "true";
const pagesBase = `/${(process.env["PAGES_BASE_PATH"] ?? "").replace(/^\/+|\/+$/g, "")}/`.replace(
  "//",
  "/",
);

export default defineConfig({
  ...(githubPages ? { vite: { base: pagesBase }, nitro: false } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(githubPages ? { prerender: { enabled: true, crawlLinks: false } } : {}),
  },
});
