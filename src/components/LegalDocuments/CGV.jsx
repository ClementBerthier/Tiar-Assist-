import HeaderMention from "../Header/HeaderMention.jsx";
import Footer from "../Footer/Footer.jsx";
import "./../../styles/LegalDocuments.css";

export default function CGV() {
    return (
        <>
            <HeaderMention />
            <div className="legalMentions">
                <h1 className="legalMentions-title">
                    Conditions Générales de Vente
                </h1>
                <div className="legalMentions-content">
                    <div className="content-section">
                        <h2 className="section-title">exemple 1</h2>
                        <p className="section-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque vel eius perspiciatis nemo aspernatur
                            ad dignissimos amet, laborum sit, iure doloremque
                            similique, eveniet repellendus maxime tenetur.
                            Molestiae vero autem veritatis?
                        </p>
                    </div>
                </div>
                <div className="legalMentions-otherMentions">
                    <a href="/ML">Mentions Légales</a>
                    <a href="/CGU">Conditions générale d'utilisation</a>
                    <a href="/PrivacyPolicy">Politique de confidentialité</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
