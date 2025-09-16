import HeaderMention from "../Header/HeaderMention.jsx";
import Footer from "../Footer/Footer.jsx";
import "./../../styles/LegalDocuments.css";

export default function CGV() {
    return (
        <>
            <HeaderMention />
            <div className="legalMentions">
                <h1 className="legalMentions-title">
                    Politique de Confidentialité
                </h1>
                <div className="legalMentions-content">
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 1 : Introduction
                        </h2>
                        <p className="section-text">
                            Chez Tiaré Assist', nous accordons une grande
                            importance à la protection de votre vie privée.
                            Cette politique de confidentialité a pour but de
                            vous informer sur la manière dont nous collectons,
                            utilisons et protégeons vos données personnelles
                            lorsque vous utilisez notre site web et nos services
                            de développement web.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 2 : Responsable du traitement des données
                        </h2>
                        <p className="section-text">
                            Le responsable du traitement des données
                            personnelles est Madame Mandy Micheau, domiciliée au
                            12c boulevard de la Méditerranée, 31270 Frouzins.
                            Adresse de courrier électronique :
                            tiareassist@gmail.com Numéro de téléphone :
                            06.45.58.95.76
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 3 : Données collectées
                        </h2>
                        <p className="section-text">
                            Nous collectons différentes données personnelles en
                            fonction de votre utilisation de notre site et de
                            nos services, notamment : votre nom, prénom, adresse
                            électronique, numéro de téléphone, ainsi que toutes
                            autres informations que vous nous transmettez via
                            notre formulaire de contact.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 4 : Utilisations des données
                        </h2>
                        <p className="section-text">
                            Les données collectées sont utilisées pour les
                            finalités suivantes : exécution des contrats de
                            secrétariat et réponses aux demandes d'information.
                            Les données collectées ne sont en aucun cas
                            transmises à des tiers sans votre consentement.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 5 : Base légale du traitement des données
                        </h2>
                        <p className="section-text">
                            Le traitement de vos données personnelles est basé
                            sur les fondements juridiques tels que l'exécution
                            d'un contrat, le respect d'une obligation légale,
                            l'intérêt légitime ou le consentement.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 6 : Partage des données
                        </h2>
                        <p className="section-text">
                            Vos données personnelles ne sont en aucun cas
                            partagées, vendues ou louées à des tiers sans votre
                            consentement. Les seuls cas de partage de données
                            sont ceux nécessaires à l'exécution de nos services,
                            notamment avec nos prestataires sous-traitants.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 7 : Durée de conservation des données
                        </h2>
                        <p className="section-text">
                            Nous conservons vos données personnelles uniquement
                            le temps nécessaire pour les finalités pour
                            lesquelles elles ont été collectées, conformément
                            aux exigences légales.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 8 : Droits des utilisateurs
                        </h2>
                        <p className="section-text">
                            Vous disposez des droits suivants concernant vos
                            données personnelles : droit d'accès, droit de
                            rectification, droit à l'effacement, droit à la
                            limitation du traitement, droit à la portabilité des
                            données, droit d'opposition et droit de retirer
                            votre consentement à tout moment. Pour exercer ces
                            droits, vous pouvez nous contacter via le formulaire
                            de contact présent sur le site.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 9 : Sécurité des données
                        </h2>
                        <p className="section-text">
                            Nous mettons en œuvre des mesures de sécurité
                            techniques et organisationnelles pour protéger vos
                            données contre toute destruction, perte, altération,
                            divulgation ou accès non autorisé.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 10 : Utilisation des cookies
                        </h2>
                        <p className="section-text">
                            Notre site n'utilise pas de cookies.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 11 : Modifications de la politique de
                            confidentialité
                        </h2>
                        <p className="section-text">
                            Nous pouvons modifier cette politique de
                            confidentialité de temps en temps. Nous vous
                            informerons de tout changement en publiant la
                            nouvelle politique sur notre site. Nous vous
                            encourageons à consulter cette page régulièrement
                            pour rester informé des mises à jour.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">Article 12 : Contact</h2>
                        <p className="section-text">
                            Pour toute question relative à cette politique de
                            confidentialité ou pour exercer vos droits, vous
                            pouvez nous contacter via le formulaire de contact
                            présent sur le site.
                        </p>
                    </div>
                </div>
                <div className="legalMentions-otherMentions">
                    <a href="/ML">Mentions Légales</a>
                    <a href="/CGU">Conditions générale d'utilisation</a>
                    <a href="/CGV">Conditions générales de ventes</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
