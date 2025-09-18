import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import critters from "vite-plugin-critters";

export default defineConfig({
    plugins: [
        react(),
        critters({
            preload: "swap", // transforme <link rel="stylesheet"> en non-bloquant
            reduceInlineStyles: true,
        }),
    ],
});
