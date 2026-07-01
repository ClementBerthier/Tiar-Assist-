// Shared services & pricing data.
// Consumed by the homepage Services section, the pricing modal/table and the
// /services page — single source of truth to keep prices from drifting apart.

export const FORMULAS = [
    {
        name: "Formule Frangipanier",
        tag: "sur mesure",
        price: "50 €",
        unit: "/ heure HT*",
        image: "/images/FleurFrangipanier.webP",
        description:
            "De la plus petite tâche occasionnelle à la mission récurrente : impression, rédaction de mails, archivage, gestion du quotidien.",
    },
    {
        name: "Formule Hibiscus",
        tag: "remplacement court",
        price: "400 €",
        unit: "/ semaine HT*",
        image: "/images/FleurHibiscus.webP",
        description:
            "Une absence, un congé d'une à deux semaines ? Quelqu'un qui gère l'essentiel rapidement, sans passer par l'intérim.",
    },
    {
        name: "Formule Tiaré",
        tag: "longue durée",
        price: "1200 €",
        unit: "/ mois HT*",
        image: "/images/FleurTiaré.webP",
        description:
            "Un remplacement d'un mois ou plus : appels, mails, maintien de l'ordre administratif au quotidien.",
    },
];

export const EXPERTISE = [
    {
        title: "Secrétariat & administratif",
        items: [
            "Gestion et tri des mails",
            "Rédaction et mise en page de documents",
            "Archivage, classement, suivi des dossiers",
            "Aide aux démarches administratives",
        ],
    },
    {
        title: "Gestion commerciale",
        items: [
            "Saisie et traitement de données",
            "Préparation de devis et factures",
            "Suivi des stocks et des fournisseurs",
            "Planification et organisation",
        ],
    },
    {
        title: "Informatique & SAV",
        items: [
            "Transcription audio",
            "Gestion du SAV de vos logiciels",
            "Maîtrise des outils bureautiques",
            "Accompagnement en télétravail",
        ],
    },
];

// Column groups for the detailed pricing grid. Each group has two modes
// (télétravail / sur site), so every row below carries 6 values in this order.
export const PRICE_COLUMN_GROUPS = [
    { label: "À l'heure", modes: ["Télétravail", "Sur site"] },
    { label: "À la tâche", modes: ["Télétravail", "Sur site"] },
    { label: "Au mois", modes: ["Télétravail", "Sur site"] },
];

export const PRICE_ROWS = [
    { service: "Gestion des mails", values: ["35 €", "45 €", "100 €", "125 €", "600 €", "750 €"] },
    { service: "Planification des RDV", values: ["30 €", "40 €", "80 €", "100 €", "500 €", "625 €"] },
    { service: "Rédaction de documents", values: ["35 €", "45 €", "100 €", "125 €", "600 €", "750 €"] },
    { service: "Gestion des réseaux sociaux", values: ["30 €", "40 €", "80 €", "100 €", "500 €", "625 €"] },
    { service: "Préparation de publicité", values: ["40 €", "50 €", "100 €", "125 €", "500 €", "625 €"] },
    { service: "Saisie de données", values: ["30 €", "40 €", "80 €", "100 €", "500 €", "625 €"] },
    { service: "Archivage", values: ["40 €", "50 €", "100 €", "125 €", "500 €", "625 €"] },
    { service: "Transcription audio", values: ["2,40 €/min", "3 €", "140 €", "175 €", "600 €", "750 €"] },
];

export const PRICING_NOTE =
    "Tarifs indicatifs, hors taxes. Le tarif final dépend du volume et de la récurrence.";
