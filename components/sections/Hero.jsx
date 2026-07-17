import Link from "next/link";

function TrustItem({ children, icon }) {
    return (
        <span className="inline-flex items-center gap-2">
            <span className="text-green">{icon}</span> {children}
        </span>
    );
}

export default function Hero() {
    return (
        <section
            id="accueil"
            className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(188,205,110,0.22),rgba(188,205,110,0)_46%)]"
        >
            {/* discreet botanical accents */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/FiligraneTiare.webP"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 w-[300px] rotate-[38deg] [filter:contrast(1.08)_saturate(1.12)_drop-shadow(0_7px_20px_rgba(35,60,40,0.12))]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/FiligraneTiare.webP"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 w-[300px] -rotate-[38deg] -scale-x-100 [filter:contrast(1.08)_saturate(1.12)_drop-shadow(0_7px_20px_rgba(35,60,40,0.12))]"
            />

            <div className="mx-auto max-w-[1180px] px-7">
                <div className="relative flex flex-col items-center py-[58px] pb-[92px] text-center [text-shadow:0_0_4px_#fff,0_0_8px_#fff,0_0_12px_rgba(255,255,255,0.95),0_0_22px_rgba(255,255,255,0.9),0_0_32px_rgba(255,255,255,0.8)] max-[600px]:py-[42px] max-[600px]:pb-16">
                    <span className="reveal mb-6 flex h-[118px] w-[145px] items-start justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/LogoTiare.webP"
                            alt=""
                            className="-mt-[7px] w-[185px] max-w-none drop-shadow-[0_14px_22px_rgba(0,0,0,0.13)]"
                        />
                    </span>

                    <span className="eyebrow reveal d1 mb-[26px]">
                        <span className="eyebrow-dot" /> Toulouse &amp; Frouzins
                        · Présentiel ou à distance
                    </span>

                    <h1 className="reveal d1 max-w-[15ch] font-heading text-[clamp(2.35rem,5vw,3.55rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-green-dark">
                        Votre administratif,{" "}
                        <span className="text-terracotta">enfin serein</span>.
                    </h1>

                    <p className="reveal d2 mb-5 mt-4 font-script text-[clamp(1.55rem,2.5vw,2rem)] font-semibold text-green">
                        Secrétariat externalisé, sérénité retrouvée.
                    </p>

                    <p className="reveal d2 mb-2.5 max-w-[34em] font-heading text-base font-medium text-muted">
                        Secrétariat indépendant à Toulouse, Frouzins et dans
                        tout le sud-ouest toulousain.
                    </p>

                    <p className="reveal d2 mx-auto mb-9 max-w-[34em] text-[1.08rem] text-muted">
                        Mails, dossiers, mises en page, suivis, classements, je
                        prends en charge votre gestion administrative pour que
                        vous vous concentriez sur l&apos;essentiel : votre
                        activité.
                    </p>

                    <div className="reveal d3 flex flex-wrap justify-center gap-3.5 text-shadow-none">
                        <Link href="/#contact" className="btn btn-primary">
                            Demander un devis gratuit
                        </Link>
                        <Link href="/#services" className="btn btn-ghost">
                            Découvrir mes formules
                        </Link>
                    </div>

                    <div className="reveal d3 mt-[38px] flex flex-wrap items-center justify-center gap-x-[26px] gap-y-3.5 font-heading text-[0.86rem] text-muted">
                        <TrustItem
                            icon={
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            }
                        >
                            20 ans d&apos;expérience admin &amp; informatique
                        </TrustItem>
                        <span className="h-[5px] w-[5px] rounded-full bg-green/30 max-[600px]:hidden" />
                        <TrustItem
                            icon={
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="3"
                                        y="11"
                                        width="18"
                                        height="11"
                                        rx="2"
                                    />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            }
                        >
                            Confidentialité assurée
                        </TrustItem>
                        <span className="h-[5px] w-[5px] rounded-full bg-green/30 max-[600px]:hidden" />
                        <TrustItem
                            icon={
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.7.9-5.5-4-3.9 5.5-.8z" />
                                </svg>
                            }
                        >
                            100&nbsp;% sur mesure
                        </TrustItem>
                    </div>
                </div>
            </div>
        </section>
    );
}
