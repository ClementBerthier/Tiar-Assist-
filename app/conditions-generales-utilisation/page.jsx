import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Conditions générales d'utilisation",
    description:
        "Conditions générales d'utilisation du site de Tiaré Assist', secrétariat indépendant à Frouzins (31270).",
    alternates: { canonical: "/conditions-generales-utilisation" },
    robots: { index: false, follow: true },
};

export default function ConditionsGeneralesUtilisation() {
    return (
        <>
            <Header />
            <main className="legal-content">
                <h1>Conditions Générales d'Utilisation</h1>

                <h2>Article 1 : Objet</h2>
                <p>
                    Les présentes conditions générales d’utilisation (CGU) ont
                    pour objet de définir les modalités et conditions dans
                    lesquelles les utilisateurs peuvent accéder au site et
                    utiliser ses services.
                </p>

                <h2>Article 2 : Accès au site</h2>
                <p>
                    Le site Tiaré Assist' est accessible gratuitement à tout
                    utilisateur disposant d’un accès à Internet. Tous les coûts
                    afférents à l’accès au site, qu’il s’agisse de frais
                    matériels, logiciels ou d’accès à Internet, sont
                    exclusivement à la charge de l’utilisateur. L’éditeur ne
                    pourra être tenu responsable de tout dysfonctionnement du
                    réseau ou des serveurs, ou de tout autre événement échappant
                    à son contrôle raisonnable, qui empêcherait ou dégraderait
                    l’accès au site.
                </p>

                <h2>Article 3 : Propriété intellectuelle</h2>
                <p>
                    L’ensemble des éléments du site (textes, images, graphismes,
                    logo, icônes, etc.) est la propriété exclusive de Tiaré
                    Assist' ou de ses partenaires. Toute reproduction,
                    représentation, modification, publication, adaptation de tout
                    ou partie des éléments du site, quel que soit le moyen ou le
                    procédé utilisé, est interdite, sauf autorisation écrite
                    préalable de Tiaré Assist'. Tout élément n’appartenant pas à
                    Tiaré Assist' est mentionné sur le site et crédité.
                </p>

                <h2>Article 4 : Responsabilité Tiaré Assist'</h2>
                <p>
                    Tiaré Assist' s’efforce de fournir des informations aussi
                    précises que possible. Toutefois, Tiaré Assist'; ne pourra
                    être tenu responsable des omissions, des inexactitudes et des
                    carences dans la mise à jour, qu’elles soient de son fait ou
                    du fait des tiers partenaires qui lui fournissent ces
                    informations.
                </p>

                <h2>Article 5 : Données personnelles</h2>
                <p>
                    Conformément à la réglementation en vigueur, Tiaré Assist'
                    s’engage à protéger la vie privée des utilisateurs et la
                    confidentialité de leurs données personnelles. Pour plus
                    d’informations, veuillez consulter la politique de
                    confidentialité.
                </p>

                <h2>Article 6 : Cookies</h2>
                <p>
                    Le site Tiaré Assist' n’utilise pas de cookies pour améliorer
                    l’expérience utilisateur et fournir des services adaptés.
                </p>

                <h2>Article 7 : Liens hypertextes</h2>
                <p>
                    Le site peut contenir des liens hypertextes vers d’autres
                    sites. Tiaré Assist' s’efforce de vérifier la qualité et
                    l’intégrité de ces sites. Néanmoins, Tiaré Assist' n’a pas la
                    possibilité de vérifier leur contenu mis à jour et n’assumera
                    en conséquence aucune responsabilité de ce fait.
                </p>

                <h2>Article 8 : Modifications des CGU</h2>
                <p>
                    Tiaré Assist' se réserve le droit de modifier les présentes
                    CGU à tout moment. Les utilisateurs sont invités à les
                    consulter régulièrement.
                </p>

                <h2>Article 9 : Droit applicable et juridiction compétente</h2>
                <p>
                    Les présentes CGU sont soumises au droit français. En cas de
                    litige, et à défaut d’accord amiable, le litige sera porté
                    devant les tribunaux français conformément aux règles de
                    compétence en vigueur.
                </p>

                <h2>Article 10 : Contact</h2>
                <p>
                    Pour toute question relative à l’utilisation du site, vous
                    pouvez nous contacter grâce à la section contact du site.
                </p>

                <ul>
                    <li>
                        <Link href="/mentions-legales">Mentions Légales</Link>
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
