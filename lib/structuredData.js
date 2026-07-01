import {
    SITE_URL,
    CONTACT_PHONE_E164,
    CONTACT_EMAIL,
} from "@/lib/site";

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Tiaré Assist'",
    alternateName: "Tiare Assist",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/LogoTiare.webP`,
    logo: `${SITE_URL}/images/LogoTiare.webP`,
    description:
        "Tiaré Assist', secrétariat indépendant basé à Frouzins (31270), propose des solutions administratives sur mesure pour les particuliers et les professionnels : gestion administrative, saisie et traitement de documents, assistance comptable, organisation et classement, rédaction de courriers et démarches administratives. Un accompagnement personnalisé et rigoureux pour simplifier votre quotidien.",
    founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/a-propos#mandy-micheau`,
        name: "Mandy Micheau",
        jobTitle: "Secrétaire indépendante",
    },
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL,
    priceRange: "50 €–1200 €",
    address: {
        "@type": "PostalAddress",
        streetAddress: "12c boulevard de la Méditerranée",
        addressLocality: "Frouzins",
        addressRegion: "Occitanie",
        postalCode: "31270",
        addressCountry: "FR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 43.5156,
        longitude: 1.3217,
    },
    areaServed: [
        { "@type": "City", name: "Toulouse" },
        { "@type": "City", name: "Frouzins" },
        { "@type": "City", name: "Cugnaux" },
        { "@type": "City", name: "Villeneuve-Tolosane" },
        { "@type": "City", name: "Muret" },
        { "@type": "City", name: "Seysses" },
        { "@type": "AdministrativeArea", name: "Haute-Garonne" },
    ],
    currenciesAccepted: "EUR",
    paymentAccepted: "Virement, Chèque",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de secrétariat",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Formule Frangipanier (sur mesure)",
                description:
                    "Tâches administratives occasionnelles ou récurrentes : impression, rédaction de mails, archivage, gestion du quotidien.",
                itemOffered: {
                    "@type": "Service",
                    name: "Tâches administratives à la carte",
                    serviceType: "Secrétariat indépendant",
                },
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: 50,
                    priceCurrency: "EUR",
                    unitCode: "HUR",
                    valueAddedTaxIncluded: false,
                },
            },
            {
                "@type": "Offer",
                name: "Formule Hibiscus",
                description:
                    "Remplacement temporaire d'une à deux semaines : gestion de l'essentiel rapidement sans passer par l'intérim.",
                itemOffered: {
                    "@type": "Service",
                    name: "Remplacement temporaire d'une à deux semaines",
                    serviceType: "Secrétariat indépendant",
                },
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: 400,
                    priceCurrency: "EUR",
                    unitCode: "WEE",
                    valueAddedTaxIncluded: false,
                },
            },
            {
                "@type": "Offer",
                name: "Formule Tiaré",
                description:
                    "Gestion administrative quotidienne sur un mois ou plus : appels, mails, maintien de l'ordre administratif.",
                itemOffered: {
                    "@type": "Service",
                    name: "Gestion administrative mensuelle",
                    serviceType: "Secrétariat indépendant",
                },
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: 1200,
                    priceCurrency: "EUR",
                    unitCode: "MON",
                    valueAddedTaxIncluded: false,
                },
            },
        ],
    },
    knowsAbout: [
        "Secrétariat indépendant",
        "Gestion administrative",
        "Rédaction de documents",
        "Saisie de données",
        "Transcription audio",
        "Gestion commerciale",
        "Assistance comptable",
        "Organisation et classement",
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday", "Saturday"],
            opens: "09:00",
            closes: "13:00",
        },
    ],
};

export const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Tiaré Assist'",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#business` },
};
