/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Next.js dev (Fast Refresh) needs 'unsafe-eval'; production stays strict.
const scriptSrc = `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`;

const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
        key: "Content-Security-Policy",
        value: `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https://*.tile.openstreetmap.org; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests`,
    },
];

const nextConfig = {
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }];
    },
    async redirects() {
        return [
            { source: "/ML", destination: "/mentions-legales", permanent: true },
            {
                source: "/CGU",
                destination: "/conditions-generales-utilisation",
                permanent: true,
            },
            {
                source: "/CGV",
                destination: "/conditions-generales-vente",
                permanent: true,
            },
            {
                source: "/PrivacyPolicy",
                destination: "/politique-de-confidentialite",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
