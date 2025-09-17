import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        {
            name: "inline-css",
            transformIndexHtml(html, ctx) {
                if (!ctx || !ctx.bundle) return html;
                // cherche le fichier CSS émis par Vite
                const cssFile = Object.keys(ctx.bundle).find((f) =>
                    f.endsWith(".css")
                );
                if (!cssFile) return html;
                const css = ctx.bundle[cssFile].source;
                // remplace le <link ...> par un <style> inline
                return html.replace(
                    /<link[^>]+rel=["']stylesheet["'][^>]*>/,
                    `<style>${css}</style>`
                );
            },
        },
    ],
});
