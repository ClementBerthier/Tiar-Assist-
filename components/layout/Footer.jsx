import Link from "next/link";
import {
    CONTACT_PHONE_E164,
    CONTACT_PHONE_DISPLAY,
    CONTACT_EMAIL,
} from "@/lib/site";

const YEAR_START = 2025;

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const yearLabel =
        currentYear > YEAR_START
            ? `${YEAR_START}-${currentYear}`
            : `${YEAR_START}`;

    return (
        <>
            <footer className="bg-green-deep pt-[58px] text-[#cfe0d6]">
                <div className="mx-auto max-w-[1180px] px-7">
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-10 pb-[42px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:text-center">
                        <div>
                            <div className="mb-4 flex items-center gap-3 max-[760px]:justify-center">
                                <span className="flex h-8 w-[42px] items-start justify-center overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/LogoTiare.webP"
                                        alt=""
                                        className="-mt-1 w-[50px] max-w-none"
                                    />
                                </span>
                                <span className="font-heading text-[1.2rem] font-bold text-white">
                                    Tiaré Assist&apos;
                                </span>
                            </div>
                            <p className="max-w-[30ch] text-[0.92rem] max-[760px]:mx-auto">
                                Des solutions adaptées à vos besoins. Je mets mon
                                expertise à votre service pour une gestion plus
                                simple et professionnelle de vos projets.
                            </p>
                        </div>

                        <nav aria-label="Navigation de pied de page">
                            <h4 className="mb-4 font-heading text-base font-bold text-white">
                                Navigation
                            </h4>
                            {[
                                { href: "/#accueil", label: "Accueil" },
                                { href: "/a-propos", label: "À propos" },
                                { href: "/#zone", label: "Zone d'intervention" },
                                { href: "/#contact", label: "Contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="mb-[11px] block text-[0.93rem] hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div>
                            <h4 className="mb-4 font-heading text-base font-bold text-white">
                                Contact
                            </h4>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="mb-[11px] block text-[0.93rem] hover:text-white"
                            >
                                {CONTACT_EMAIL}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_E164}`}
                                className="mb-[11px] block text-[0.93rem] hover:text-white"
                            >
                                {CONTACT_PHONE_DISPLAY}
                            </a>
                            <p className="text-[0.93rem]">
                                Frouzins (31270) · Occitanie
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 py-[18px] text-center text-[0.82rem]">
                    Tiaré Assist&apos; © {yearLabel} — Conçu &amp; développé par{" "}
                    <a
                        href="https://www.clementberthierdeveloppeur.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        Clément Berthier Développeur
                    </a>{" "}
                    ·{" "}
                    <Link href="/mentions-legales" className="text-white">
                        Mentions légales
                    </Link>
                </div>
            </footer>
        </>
    );
}
