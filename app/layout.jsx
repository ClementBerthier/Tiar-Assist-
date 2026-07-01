import { Montserrat, Lato, Dancing_Script } from "next/font/google";
import { localBusinessSchema, webSiteSchema } from "@/lib/structuredData";
import RevealObserver from "@/components/ui/RevealObserver";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
    display: "swap",
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-dancing",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default:
            "Tiaré Assist' | Secrétariat indépendant à Toulouse et Frouzins",
        template: "%s | Tiaré Assist'",
    },
    description:
        "Secrétariat indépendant à Toulouse et Frouzins (31270) : gestion administrative, rédaction, saisie et transcription pour pros et particuliers. Devis gratuit.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName: "Tiaré Assist'",
        locale: "fr_FR",
        url: "/",
        title: "Tiaré Assist' | Secrétariat indépendant à Toulouse et Frouzins",
        description:
            "Secrétariat indépendant à Toulouse et Frouzins. Gestion administrative, rédaction, saisie de données et aide aux démarches. Formules sur mesure dès 50€/h. Devis gratuit.",
        images: [
            {
                url: "/images/og-tiare-assist.webp",
                width: 1200,
                height: 630,
                alt: "Tiaré Assist' - Secrétariat indépendant",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tiaré Assist' | Secrétariat indépendant à Toulouse et Frouzins",
        description:
            "Secrétariat indépendant à Toulouse et Frouzins. Gestion administrative, rédaction, saisie de données et aide aux démarches. Formules sur mesure dès 50€/h. Devis gratuit.",
        images: ["/images/og-tiare-assist.webp"],
    },
    icons: {
        icon: "/images/LogoTiareIcone.ico",
        apple: "/images/LogoTiareIcone.ico",
    },
    robots: { index: true, follow: true },
    other: {
        "geo.region": "FR-OCC",
        "geo.placename": "Frouzins, Toulouse",
        "geo.position": "43.5156;1.3217",
        ICBM: "43.5156, 1.3217",
    },
};

export const viewport = {
    themeColor: "#fffaf2",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="fr"
            className={`${montserrat.variable} ${lato.variable} ${dancingScript.variable}`}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: "document.documentElement.classList.add('js')",
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(webSiteSchema),
                    }}
                />
            </head>
            <body>
                {children}
                <RevealObserver />
            </body>
        </html>
    );
}
