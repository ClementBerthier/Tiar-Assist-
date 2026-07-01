import Link from "next/link";

export const metadata = {
    title: "Page introuvable",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-7 text-center">
            <span className="flex h-[110px] w-[130px] items-start justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/LogoTiare.webP"
                    alt="Logo Tiaré Assist'"
                    className="-mt-2 w-[165px] max-w-none"
                />
            </span>
            <p className="mt-6 font-script text-3xl text-green">Oups…</p>
            <h1 className="mt-2 font-heading text-[clamp(2rem,5vw,3rem)] font-extrabold text-green-dark">
                Page introuvable
            </h1>
            <p className="mt-3 max-w-[40ch] text-muted">
                La page que vous cherchez n&apos;existe pas ou a été déplacée.
            </p>
            <Link href="/" className="btn btn-primary mt-7">
                Retour à l&apos;accueil
            </Link>
        </main>
    );
}
