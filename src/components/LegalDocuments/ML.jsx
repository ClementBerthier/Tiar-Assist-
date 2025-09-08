import HeaderMention from "../Header/HeaderMention.jsx";
import Footer from "../Footer/Footer.jsx";
import "./../../styles/LegalDocuments.css";

export default function ML() {
    return (
        <>
            <HeaderMention />
            <div className="legalMentions">
                <h1 className="legalMentions-title">Mentions Légales</h1>
                <div className="legalMentions-content">
                    <div className="content-section">
                        <h2 className="section-title">
                            1 - Identité et coordonnées
                        </h2>
                        <p className="section-text">
                            {" "}
                            Tiaré Assist', entreprise individuelle gérée par
                            Madame Mandy Micheau, dont l'adresse professionnelle
                            est située au 12c boulevard de la Mediterranee 31270
                            Frouzins, N° SIRET : XXXXXXXXXX, code NAF : 8211Z,
                            Services administratifs combinés de bureau. Adresse
                            électronique : tiareassist@gmail.com, numéro de
                            téléphone : 06.45.58.95.76{" "}
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">
                            2. Propriété intellectuelle
                        </h2>
                        <p className="section-text">
                            L'ensemble des éléments du site internet de Tiaré
                            Assist', notamment les textes, présentations,
                            illustrations, photographies, arborescences et mises
                            en forme, sont, sauf documents publics et précisions
                            complémentaires, la propriété intellectuelle
                            exclusive de Tiaré Assist' ou de ses partenaires.
                        </p>
                    </div>
                    <div className="content-section">
                        <h2 className="section-title">3. Hébergement</h2>
                        <p className="section-text">
                            Ce site est hébergé par la société Vercel Inc.,
                            située 340 S Lemon Ave #4133 Walnut, CA 91789, et
                            joignable au (559) 288-7060.
                        </p>
                    </div>
                </div>
                <div className="legalMentions-otherMentions">
                    <a href="/CGU">Conditions générale d'utilisation</a>
                    <a href="/CGV">Conditions générales de ventes</a>
                    <a href="/PrivacyPolicy">Politique de confidentialité</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
