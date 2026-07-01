import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { EXPERTISE } from "@/lib/services";
import {
    SITE_URL,
    CONTACT_PHONE_E164,
    CONTACT_PHONE_DISPLAY,
    CONTACT_EMAIL,
} from "@/lib/site";

export const metadata = {
    title: "À propos · Mandy Micheau, secrétaire indépendante",
    description:
        "Mandy Micheau, fondatrice de Tiaré Assist' à Frouzins (31270) : 20 ans d'expérience en secrétariat, administration et informatique pour pros et particuliers.",
    alternates: { canonical: "/a-propos" },
    openGraph: {
        type: "profile",
        url: "/a-propos",
        title: "À propos · Mandy Micheau, secrétaire indépendante à Frouzins",
        description:
            "20 ans d'expérience en secrétariat, administration et informatique. Découvrez le parcours de la fondatrice de Tiaré Assist', de Tahiti à Frouzins.",
    },
};

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/a-propos#aboutpage`,
    url: `${SITE_URL}/a-propos`,
    name: "À propos de Tiaré Assist'",
    inLanguage: "fr-FR",
    mainEntity: { "@id": `${SITE_URL}/#business` },
    about: {
        "@type": "Person",
        "@id": `${SITE_URL}/a-propos#mandy-micheau`,
        name: "Mandy Micheau",
        jobTitle: "Secrétaire indépendante",
        image: `${SITE_URL}/images/AvatarPersonnel.webP`,
        worksFor: { "@id": `${SITE_URL}/#business` },
        description:
            "Fondatrice de Tiaré Assist', Mandy Micheau cumule 20 ans d'expérience dans l'administration et l'informatique, dont 11 en télétravail.",
        knowsAbout: [
            "Secrétariat indépendant",
            "Gestion administrative",
            "Gestion commerciale",
            "Informatique bureautique",
            "Transcription audio",
            "Organisation et classement",
        ],
    },
};


const JOURNEY = [
    {
        place: "Tahiti",
        years: "2005 – 2009",
        icon: "flower",
        text: "Tout commence en Polynésie, comme secrétaire médicale en clinique et à l'Institut Louis Malardé.",
    },
    {
        place: "Paris, Nice & Grenoble",
        years: "2010 – 2014",
        icon: "france",
        text: "Cap sur la métropole : secrétariat hospitalier puis laboratoires d'analyses, entre la capitale et le Sud-Est.",
    },
    {
        place: "À distance",
        years: "2014 – 2025",
        icon: "laptop",
        text: "Onze ans comme technicienne d'assistance informatique — le télétravail et la rigueur du support, bien avant que ce soit la norme.",
    },
    {
        place: "Frouzins",
        years: "Depuis 2025",
        icon: "home",
        text: "Toute cette expérience réunie dans Tiaré Assist', au service des pros et des particuliers du sud-ouest toulousain.",
    },
];

const VALUES = [
    {
        title: "Confidentialité",
        text: "Vos documents et vos données sont traités avec la plus grande discrétion.",
    },
    {
        title: "Rigueur",
        text: "20 ans d'exigence administrative, au service de votre organisation.",
    },
    {
        title: "Proximité",
        text: "En présentiel autour de Frouzins, ou à distance partout en France.",
    },
    {
        title: "Sur mesure",
        text: "Je m'adapte à votre fonctionnement, vos outils et votre rythme.",
    },
];

const STOP_ICONS = {
    flower: (
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
            <path d="M12 7.5V9" />
            <path d="M7.5 12H9" />
            <path d="M16.5 12H15" />
            <path d="M12 16.5V15" />
            <path d="m8 8 1.88 1.88" />
            <path d="M14.12 9.88 16 8" />
            <path d="m8 16 1.88-1.88" />
            <path d="M14.12 14.12 16 16" />
        </>
    ),
    laptop: (
        <>
            <rect x="3" y="5" width="18" height="12" rx="2" />
            <path d="M2 20h20" />
        </>
    ),
    home: (
        <>
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9 21v-6h6v6" />
        </>
    ),
};

function StopIcon({ name }) {
    if (name === "france") {
        return (
            <span
                aria-hidden="true"
                className="block h-[26px] w-[26px] bg-white"
                style={{
                    maskImage: "url(/images/carte-france.webp)",
                    WebkitMaskImage: "url(/images/carte-france.webp)",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                }}
            />
        );
    }

    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {STOP_ICONS[name]}
        </svg>
    );
}

function Stat({ value, label }) {
    return (
        <div className="text-center">
            <div className="font-heading text-[2.2rem] font-extrabold text-terracotta">
                {value}
            </div>
            <div className="text-[0.85rem] text-muted">{label}</div>
        </div>
    );
}

export default function APropos() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutSchema),
                }}
            />
            <Header />

            <main>
                {/* ---- Intro ---- */}
                <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(188,205,110,0.22),rgba(188,205,110,0)_46%)] py-[72px]">
                    <div className="mx-auto grid max-w-[1180px] grid-cols-[0.9fr_1.1fr] items-center gap-[54px] px-7 max-[860px]:grid-cols-1 max-[860px]:gap-10 max-[860px]:text-center">
                        <div className="relative flex justify-center">
                            <div className="relative h-[300px] w-[300px] max-[400px]:h-[240px] max-[400px]:w-[240px]">
                                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--color-cream),var(--color-sand-deep))] shadow-card-lg" />
                                <div className="absolute inset-[14px] rounded-full border border-dashed border-green/20" />
                                <Image
                                    src="/images/AvatarPersonnel.webP"
                                    alt="Mandy Micheau, fondatrice de Tiaré Assist', secrétaire indépendante à Frouzins"
                                    width={300}
                                    height={300}
                                    priority
                                    className="relative h-full w-full rounded-full object-cover p-3"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="eyebrow mb-5">
                                <span className="eyebrow-dot" /> À propos ·
                                Mandy Micheau
                            </span>
                            <h1 className="font-heading text-[clamp(2.1rem,4.2vw,3.1rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-green-dark">
                                Votre secrétaire indépendante à Frouzins
                            </h1>
                            <p className="mt-3 font-script text-[clamp(1.4rem,2.4vw,1.85rem)] font-semibold text-green">
                                Secrétariat externalisé, sérénité retrouvée.
                            </p>
                            <p className="mt-5 max-w-[42ch] text-[1.08rem] text-muted max-[860px]:mx-auto">
                                Fondatrice de Tiaré Assist', j&apos;accompagne
                                les entreprises et les particuliers du sud-ouest
                                toulousain dans leur gestion administrative avec
                                20 ans d&apos;expérience, en présentiel ou à
                                distance.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-start gap-3.5 max-[860px]:justify-center">
                                <Link
                                    href="/#contact"
                                    className="btn btn-primary"
                                >
                                    Demander un devis gratuit
                                </Link>
                                <Link
                                    href="/#services"
                                    className="btn btn-ghost"
                                >
                                    Voir mes formules
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---- Parcours (Experience) ---- */}
                <section className="bg-sand py-[84px]">
                    <div className="mx-auto max-w-[820px] px-7 text-center">
                        <span className="eyebrow">
                            <span className="eyebrow-dot" /> Mon parcours
                        </span>
                        <h2 className="mb-5 mt-[18px] font-heading text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold leading-[1.14] tracking-[-0.018em] text-green-dark">
                            20 ans d&apos;expérience au service de votre
                            organisation
                        </h2>
                        <div className="space-y-4 text-left text-[1.05rem] text-muted">
                            <p>
                                Après 20 ans passés dans l&apos;administration
                                et l&apos;informatique, dont 11 en télétravail,
                                j&apos;ai choisi l&apos;auto-entrepreneuriat
                                pour concilier ma vie personnelle et
                                professionnelle, sans jamais rien céder sur la
                                rigueur.
                            </p>
                            <p>
                                De cette double expérience est née Tiaré Assist'
                                : un secrétariat externalisé qui allie
                                l&apos;organisation administrative et
                                l&apos;aisance avec les outils informatiques.
                                Mon objectif est simple : vous libérer des
                                tâches chronophages pour que vous puissiez vous
                                concentrer sur votre cœur de métier.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                            <Stat
                                value="20 ans"
                                label="d'expérience admin & informatique"
                            />
                            <Stat value="11 ans" label="en télétravail" />
                            <Stat value="100 %" label="sur mesure" />
                        </div>

                        <div className="mt-[70px]">
                            <p className="mb-12 text-center font-script text-[clamp(1.5rem,3vw,2rem)] font-semibold text-green">
                                De Tahiti à Frouzins
                            </p>
                            <ol className="relative grid grid-cols-4 gap-6 max-[860px]:grid-cols-1 max-[860px]:gap-10">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[12.5%] right-[12.5%] top-[27px] block border-t-2 border-dashed border-green/25 max-[860px]:hidden"
                                />
                                {JOURNEY.map((stop) => (
                                    <li
                                        key={stop.place}
                                        className="relative flex flex-col items-center text-center"
                                    >
                                        <span className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-terracotta text-white shadow-card ring-4 ring-sand">
                                            <StopIcon name={stop.icon} />
                                        </span>
                                        <span className="mt-5 font-heading text-[0.76rem] font-bold uppercase tracking-wide text-terracotta">
                                            {stop.years}
                                        </span>
                                        <h3 className="mt-1 font-heading text-[1.12rem] font-bold text-green-dark">
                                            {stop.place}
                                        </h3>
                                        <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                                            {stop.text}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ---- Expertise ---- */}
                <section className="bg-cream py-[84px]">
                    <div className="mx-auto max-w-[1180px] px-7">
                        <div className="mx-auto mb-[50px] max-w-[40em] text-center">
                            <span className="eyebrow">
                                <span className="eyebrow-dot" /> Mon expertise
                            </span>
                            <h2 className="mb-3 mt-[18px] font-heading text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold leading-[1.14] tracking-[-0.018em] text-green-dark">
                                Bien plus que du secrétariat
                            </h2>
                            <p className="text-[1.05rem] text-muted">
                                Trois domaines complémentaires, pour prendre en
                                charge l&apos;ensemble de votre gestion.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-[26px] max-[860px]:grid-cols-1">
                            {EXPERTISE.map((domain) => (
                                <div
                                    key={domain.title}
                                    className="rounded-[22px] border border-green/[0.06] bg-white p-[30px_28px] shadow-card"
                                >
                                    <h3 className="mb-4 font-heading text-[1.2rem] font-bold text-green-dark">
                                        {domain.title}
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {domain.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2.5 text-[0.95rem] text-muted"
                                            >
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#23613f"
                                                    strokeWidth="2.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mt-1 flex-none"
                                                >
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---- Valeurs (Trust) ---- */}
                <section className="bg-sand py-[84px]">
                    <div className="mx-auto max-w-[1180px] px-7">
                        <div className="mx-auto mb-[50px] max-w-[40em] text-center">
                            <span className="eyebrow">
                                <span className="eyebrow-dot" /> Mes engagements
                            </span>
                            <h2 className="mb-3 mt-[18px] font-heading text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold leading-[1.14] tracking-[-0.018em] text-green-dark">
                                Ce sur quoi vous pouvez compter
                            </h2>
                        </div>
                        <div className="grid grid-cols-4 gap-5 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1">
                            {VALUES.map((value) => (
                                <div
                                    key={value.title}
                                    className="rounded-[20px] bg-white p-7 text-center shadow-card"
                                >
                                    <h3 className="mb-2 font-heading text-[1.1rem] font-bold text-green-dark">
                                        {value.title}
                                    </h3>
                                    <p className="text-[0.92rem] text-muted">
                                        {value.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---- Transparence entreprise ---- */}
                <section className="bg-cream py-[84px]">
                    <div className="mx-auto max-w-[820px] px-7">
                        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-green to-green-deep p-[42px_38px] text-white">
                            <h2 className="font-heading text-[1.5rem] font-bold">
                                Tiaré Assist&apos; en quelques mots
                            </h2>
                            <p className="mt-2 max-w-[52ch] text-[#cfe0d6]">
                                Une entreprise individuelle française,
                                transparente et de proximité, basée dans le
                                sud-ouest toulousain.
                            </p>
                            <dl className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5 text-[0.95rem] max-[560px]:grid-cols-1">
                                <div>
                                    <dt className="text-[0.8rem] uppercase tracking-wide text-[#9ec8a8]">
                                        Fondatrice
                                    </dt>
                                    <dd className="font-semibold">
                                        Mandy Micheau · Secrétaire indépendante
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-[0.8rem] uppercase tracking-wide text-[#9ec8a8]">
                                        Localisation
                                    </dt>
                                    <dd className="font-semibold">
                                        Frouzins (31270) · Occitanie
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-[0.8rem] uppercase tracking-wide text-[#9ec8a8]">
                                        SIRET
                                    </dt>
                                    <dd className="font-semibold">
                                        99098293600017 · NAF 8211Z
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-[0.8rem] uppercase tracking-wide text-[#9ec8a8]">
                                        Contact
                                    </dt>
                                    <dd className="font-semibold">
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            className="hover:underline"
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                        <br />
                                        <a
                                            href={`tel:${CONTACT_PHONE_E164}`}
                                            className="hover:underline"
                                        >
                                            {CONTACT_PHONE_DISPLAY}
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                            <p className="mt-6 text-[0.85rem] text-[#9ec8a8]">
                                Plus d&apos;informations sur la page{" "}
                                <Link
                                    href="/mentions-legales"
                                    className="text-white underline"
                                >
                                    Mentions légales
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---- CTA ---- */}
                <section className="bg-sand py-[72px] text-center">
                    <div className="mx-auto max-w-[640px] px-7">
                        <h2 className="font-heading text-[clamp(1.7rem,3.2vw,2.2rem)] font-extrabold text-green-dark">
                            Envie de travailler ensemble ?
                        </h2>
                        <p className="mx-auto mt-3 max-w-[44ch] text-[1.05rem] text-muted">
                            Parlez-moi de votre besoin : je vous réponds sous
                            24&nbsp;h avec une proposition adaptée.
                        </p>
                        <Link href="/#contact" className="btn btn-primary mt-7">
                            Demander un devis gratuit
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
