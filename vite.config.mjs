import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        {
            name: "hint-modulepreload-safe",
            apply: "build",
            enforce: "post",
            transformIndexHtml(html) {
                const m = html.match(
                    /<script[^>]*type=["']module["'][^>]*src=["']([^"']+)["'][^>]*><\/script>/
                );
                if (!m) return html;
                const href = m[1];
                return {
                    html,
                    tags: [
                        {
                            tag: "link",
                            attrs: { rel: "modulepreload", href },
                            injectTo: "head",
                        },
                    ],
                };
            },
        },
    ],
    build: {
        modulePreload: { polyfill: true },
        minify: "esbuild",
        target: "es2018",
        sourcemap: false,
    },
});
