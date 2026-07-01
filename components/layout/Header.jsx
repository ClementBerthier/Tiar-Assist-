"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTACT_PHONE_E164, CONTACT_PHONE_DISPLAY } from "@/lib/site";

const NAV_LINKS = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/#zone", label: "Zone" },
    { href: "/#contact", label: "Contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="bg-green-deep text-[#e7f1ea] text-[0.82rem] font-bold">
                <div className="mx-auto flex h-[38px] max-w-[1180px] items-center justify-between px-7 max-[600px]:justify-center">
                    <a
                        href={`tel:${CONTACT_PHONE_E164}`}
                        className="inline-flex items-center gap-2 hover:text-white"
                    >
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        {CONTACT_PHONE_DISPLAY}
                    </a>
                    <span className="opacity-90 max-[600px]:hidden">
                        Devis gratuit · Frouzins (31270)
                    </span>
                </div>
            </div>

            <nav
                className={`sticky top-0 z-50 border-b border-green/10 bg-cream/85 backdrop-blur-md transition-shadow ${
                    scrolled ? "shadow-[0_8px_24px_-18px_rgba(35,97,63,0.6)]" : ""
                }`}
            >
                <div className="mx-auto flex h-[70px] max-w-[1180px] items-center justify-between px-7">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="flex h-[30px] w-[38px] items-start justify-center overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/LogoTiare.webP"
                                alt="Logo Tiaré Assist'"
                                className="-mt-[3px] w-[46px] max-w-none"
                            />
                        </span>
                        <span className="font-heading text-[1.12rem] font-bold text-green-dark">
                            Tiaré Assist&apos;
                        </span>
                    </Link>

                    <ul
                        className={`flex flex-1 items-center justify-center gap-[30px] max-[860px]:fixed max-[860px]:inset-x-0 max-[860px]:top-[108px] max-[860px]:flex-col max-[860px]:gap-0 max-[860px]:bg-cream max-[860px]:py-2 max-[860px]:shadow-[0_18px_30px_-20px_rgba(35,97,63,0.5)] max-[860px]:transition-transform ${
                            menuOpen
                                ? "max-[860px]:translate-y-0"
                                : "max-[860px]:-translate-y-[130%]"
                        }`}
                    >
                        {NAV_LINKS.map((link) => (
                            <li
                                key={link.href}
                                className="max-[860px]:w-full max-[860px]:border-b max-[860px]:border-green/10"
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="relative block py-1 font-heading text-[0.94rem] font-medium text-ink hover:text-green max-[860px]:px-7 max-[860px]:py-[15px] max-[860px]:text-[1.05rem]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="hidden max-[860px]:block max-[860px]:w-full max-[860px]:px-7 max-[860px]:py-3">
                            <Link
                                href="/#contact"
                                onClick={() => setMenuOpen(false)}
                                className="btn btn-primary w-full"
                            >
                                Devis gratuit
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-[18px]">
                        <Link
                            href="/#contact"
                            className="btn btn-primary px-[22px] py-[10px] max-[860px]:hidden"
                        >
                            Devis gratuit
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            className="hidden flex-col gap-[5px] p-2 max-[860px]:flex"
                        >
                            <span
                                className={`h-[2px] w-6 rounded bg-green-dark transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                            />
                            <span
                                className={`h-[2px] w-6 rounded bg-green-dark transition ${menuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`h-[2px] w-6 rounded bg-green-dark transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
