import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Politique de confidentialité",
    description:
        "Politique de confidentialité de Tiaré Assist' : collecte, utilisation et protection de vos données personnelles.",
    alternates: { canonical: "/politique-de-confidentialite" },
    robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialite() {
    return (
        <>
            <Header />
            <main className="legal-content">
                <h1>Politique de Confidentialité</h1>

                <h2>Article 1 : Introduction</h2>
                <p>
                    Chez Tiaré Assist', nous accordons une grande importance à la
                    protection de votre vie privée. Cette politique de
                    confidentialité a pour but de vous informer sur la manière
                    dont nous collectons, utilisons et protégeons vos données
                    personnelles lorsque vous utilisez notre site web et nos
                    services de secrétariat.
                </p>

                <h2>Article 2 : Responsable du traitement des données</h2>
                <p>
                    Le responsable du traitement des données personnelles est
                    Madame Mandy Micheau, domiciliée au 12c boulevard de la
                    Méditerranée, 31270 Frouzins. Adresse de courrier
                    électronique : tiareassist@gmail.com, Numéro de téléphone :
                    06.45.58.95.76
                </p>

                <h2>Article 3 : Données collectées</h2>
                <p>
                    Nous collectons différentes données personnelles en fonction
                    de votre utilisation de notre site et de nos services,
                    notamment : votre nom, prénom, adresse électronique, numéro de
                    téléphone, ainsi que toutes autres informations que vous nous
                    transmettez via notre formulaire de contact.
                </p>

                <h2>Article 4 : Utilisation des données</h2>
                <p>
                    Les données collectées sont utilisées pour les finalités
                    suivantes : exécution des contrats de secrétariat et réponses
                    aux demandes d'information. Les données collectées ne sont en
                    aucun cas transmises à des tiers sans votre consentement.
                </p>

                <h2>Article 5 : Base légale du traitement des données</h2>
                <p>
                    Le traitement de vos données personnelles est basé sur les
                    fondements juridiques tels que l'exécution d'un contrat, le
                    respect d'une obligation légale, l'intérêt légitime ou le
                    consentement.
                </p>

                <h2>Article 6 : Partage des données</h2>
                <p>
                    Vos données personnelles ne sont en aucun cas partagées,
                    vendues ou louées à des tiers sans votre consentement. Les
                    seuls cas de partage de données sont ceux nécessaires à
                    l'exécution de nos services, notamment avec nos prestataires
                    sous-traitants.
                </p>

                <h2>Article 7 : Durée de conservation des données</h2>
                <p>
                    Nous conservons vos données personnelles pour la durée du
                    contrat ou de la prestation souscrite. Pour les simples
                    demandes de contact, les données sont supprimées dans un délai
                    de 12 mois après le dernier échange.
                </p>

                <h2>Article 8 : Droits des utilisateurs</h2>
                <p>
                    Vous disposez des droits suivants concernant vos données
                    personnelles : droit d'accès, droit de rectification, droit à
                    l'effacement, droit à la limitation du traitement, droit à la
                    portabilité des données, droit d'opposition et droit de
                    retirer votre consentement à tout moment. Pour exercer ces
                    droits, vous pouvez nous contacter via le formulaire de
                    contact présent sur le site.
                </p>

                <h2>Article 9 : Sécurité des données</h2>
                <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et
                    organisationnelles pour protéger vos données contre toute
                    destruction, perte, altération, divulgation ou accès non
                    autorisé.
                </p>

                <h2>Article 10 : Utilisation des cookies</h2>
                <p>Notre site n'utilise pas de cookies.</p>

                <h2>
                    Article 11 : Modifications de la politique de confidentialité
                </h2>
                <p>
                    Nous pouvons modifier cette politique de confidentialité de
                    temps en temps. Nous vous informerons de tout changement en
                    publiant la nouvelle politique sur notre site. Nous vous
                    encourageons à consulter cette page régulièrement pour rester
                    informé des mises à jour.
                </p>

                <h2>Article 12 : Contact</h2>
                <p>
                    Pour toute question relative à cette politique de
                    confidentialité ou pour exercer vos droits, vous pouvez nous
                    contacter via le formulaire de contact présent sur le site.
                </p>

                <ul>
                    <li>
                        <Link href="/mentions-legales">Mentions Légales</Link>
                    </li>
                    <li>
                        <Link href="/conditions-generales-utilisation">
                            Conditions générale d'utilisation
                        </Link>
                    </li>
                    <li>
                        <Link href="/conditions-generales-vente">
                            Conditions générales de ventes
                        </Link>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
}
