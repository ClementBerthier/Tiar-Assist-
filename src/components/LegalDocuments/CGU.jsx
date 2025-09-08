import HeaderMention from "../Header/HeaderMention.jsx";
import Footer from "../Footer/Footer.jsx";
import "./../../styles/LegalDocuments.css";

export default function CGU() {
    return (
        <>
            <HeaderMention />
            <div className="legalMentions">
                <h1 className="legalMentions-title">
                    Conditions Générales d'Utilisation
                </h1>
                <div className="legalMentions-content">
                    <div className="content-section">
                        <h2 className="section-title">Article 1 : Objet</h2>
                        <p className="section-text">
                            Les présentes conditions générales d'utilisation
                            (CGU) ont pour objet de définir les modalités et
                            conditions dans lesquelles les utilisateurs peuvent
                            accéder au site et utiliser ses services.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 2 : Accès au site
                        </h2>
                        <p className="section-text">
                            Le site Tiaré Assist' est accessible gratuitement à
                            tout utilisateur disposant d'un accès à internet.
                            Tous les coûts afférents à l'accès au site, que ce
                            soit les frais matériels, logiciels ou d'accès à
                            internet, sont exclusivement à la charge de
                            l'utilisateur. L'éditeur ne pourra être tenu
                            responsable de tout dysfonctionnement du réseau ou
                            des serveurs ou de tout autre événement échappant au
                            contrôle raisonnable, qui empêcherait ou dégraderait
                            l'accès au site.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 3 : Propriété intellectuelle
                        </h2>
                        <p className="section-text">
                            L'ensemble des éléments du site (textes, images,
                            graphismes, logo, icônes, etc.) sont la propriété
                            exclusive de Tiaré Assist' ou de ses partenaires.
                            Toute reproduction, représentation, modification,
                            publication, adaptation de tout ou partie des
                            éléments du site, quel que soit le moyen ou le
                            procédé utilisé, est interdite, sauf autorisation
                            écrite préalable de Tiaré Assist'. Tout éléments
                            n'appartenant pas a Tiaré Assist' est mentionné dans
                            le site et crédité.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 4 : Responsabilité de Clément Berthier
                            Développeur
                        </h2>
                        <p className="section-text">
                            Tiaré Assist' s'efforce de fournir des informations
                            aussi précises que possible. Toutefois, Tiaré
                            Assist' ne pourra être tenu responsable des
                            omissions, des inexactitudes et des carences dans la
                            mise à jour, qu'elles soient de son fait ou du fait
                            des tiers partenaires qui lui fournissent ces
                            informations.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 5 : Données personnelles
                        </h2>
                        <p className="section-text">
                            Conformément à la réglementation en vigueur, Tiaré
                            Assist' s'engage à protéger la vie privée des
                            utilisateurs et la confidentialité de leurs données
                            personnelles. Pour plus d'informations, veuillez
                            consulter la politique de confidentialité.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">Article 6 : Cookies</h2>
                        <p className="section-text">
                            Le site Tiaré Assist' n'utilise pas de cookies pour
                            améliorer l'expérience utilisateur et fournir des
                            services adaptés.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 7 : Liens hypertextes
                        </h2>
                        <p className="section-text">
                            Le site peut contenir des liens hypertextes vers
                            d'autres sites. Tiaré Assist' s'efforce de vérifier
                            la qualité et l'intégrité de ces sites. Néanmoins,
                            Tiaré Assist' n'a pas la possibilité de vérifier
                            leur contenu mis à jour et n'assumera en conséquence
                            aucune responsabilité de ce fait.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 8 : Modifications des CGU
                        </h2>
                        <p className="section-text">
                            Tiaré Assist' se réserve le droit de modifier les
                            présentes CGU à tout moment. Les utilisateurs sont
                            invités à les consulter régulièrement.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            Article 9 : Droit applicable et juridiction
                            compétente
                        </h2>
                        <p className="section-text">
                            Les présentes CGU sont soumises au droit français.
                            En cas de litige, et à défaut d'accord amiable, le
                            litige sera porté devant les tribunaux français
                            conformément aux règles de compétence en vigueur.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">Article 10 : Contact</h2>
                        <p className="section-text">
                            Pour toute question relative à l'utilisation du
                            site, vous pouvez nous contacter grâce a la section
                            contact du site.
                        </p>
                    </div>
                </div>
                <div className="legalMentions-otherMentions">
                    <a href="/ML">Mentions Légales</a>
                    <a href="/CGV">Conditions générales de ventes</a>
                    <a href="/PrivacyPolicy">Politique de confidentialité</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
