import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        {
            name: "hint-modulepreload",
            apply: "build",
            enforce: "post",
            transformIndexHtml(html, ctx) {
                if (!ctx?.bundle) return html;
                const tags = [];
                for (const [, chunk] of Object.entries(ctx.bundle)) {
                    if (chunk.type === "chunk" && chunk.isEntry) {
                        tags.push({
                            tag: "link",
                            attrs: {
                                rel: "modulepreload",
                                href: `/${chunk.fileName}`,
                            },
                            injectTo: "head",
                        });
                    }
                }
                return { html, tags };
            },
        },
    ],
    build: {
        modulePreload: { polyfill: true }, // au cas où
        sourcemap: false,
        minify: "esbuild",
        target: "es2018",
    },
});
