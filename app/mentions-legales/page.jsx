import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales de Tiaré Assist', secrétariat indépendant à Frouzins (31270).",
    alternates: { canonical: "/mentions-legales" },
    robots: { index: false, follow: true },
};

export default function MentionsLegales() {
    return (
        <>
            <Header />
            <main className="legal-content">
                <h1>Mentions Légales</h1>

                <h2>1 - Identité et coordonnées</h2>
                <p>
                    Tiaré Assist', entreprise individuelle gérée par Madame Mandy
                    Micheau, dont l'adresse professionnelle est située au 12c
                    boulevard de la Méditerranée 31270 Frouzins, N° SIRET :
                    99098293600017, code NAF : 8211Z, Services administratifs
                    combinés de bureau. Adresse électronique :
                    tiareassist@gmail.com, numéro de téléphone : 06.45.58.95.76
                </p>

                <h2>2. Propriété intellectuelle</h2>
                <p>
                    L'ensemble des éléments du site internet de Tiaré Assist',
                    notamment les textes, présentations, illustrations,
                    photographies, arborescences et mises en forme, sont, sauf
                    documents publics et précisions complémentaires, la propriété
                    intellectuelle exclusive de Tiaré Assist' ou de ses
                    partenaires.
                </p>

                <h2>3. Hébergement</h2>
                <p>
                    Ce site est hébergé par la société Vercel Inc., située 340 S
                    Lemon Ave #4133 Walnut, CA 91789, et joignable au (559)
                    288-7060.
                </p>

                <ul>
                    <li>
                        <Link href="/conditions-generales-utilisation">
                            Conditions générales d'utilisation
                        </Link>
                    </li>
                    <li>
                        <Link href="/conditions-generales-vente">
                            Conditions générales de vente
                        </Link>
                    </li>
                    <li>
                        <Link href="/politique-de-confidentialite">
                            Politique de confidentialité
                        </Link>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
}
