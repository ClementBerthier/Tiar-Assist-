import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),
    {
        rules: {
            // French copy is full of apostrophes; escaping every one in JSX
            // text adds noise without value. Disabled project-wide.
            "react/no-unescaped-entities": "off",
        },
    },
    {
        ignores: [".next/**", "node_modules/**", "proto/**"],
    },
];

export default eslintConfig;
