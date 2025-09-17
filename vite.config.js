import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        {
            name: "inline-all-css",
            apply: "build",
            enforce: "post",
            transformIndexHtml(html, ctx) {
                // En build seulement, on a accès au bundle Rollup
                if (!ctx?.bundle) return html;

                // Concatène tout le CSS émis par Vite
                let css = "";
                for (const [, asset] of Object.entries(ctx.bundle)) {
                    if (
                        asset.type === "asset" &&
                        asset.fileName.endsWith(".css")
                    ) {
                        css += String(asset.source || "");
                        // optionnel: on retire le fichier CSS du bundle
                        delete ctx.bundle[asset.fileName];
                    }
                }
                if (!css) return html;

                // Supprime tous les <link rel="stylesheet"> et injecte le <style>
                const cleaned = html.replace(
                    /<link[^>]+rel=["']stylesheet["'][^>]*>/g,
                    ""
                );
                return {
                    html: cleaned,
                    tags: [{ tag: "style", children: css, injectTo: "head" }],
                };
            },
        },
    ],
});
