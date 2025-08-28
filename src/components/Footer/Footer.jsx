import { useState } from "react";
import "../../styles/Footer.css";
export default function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="footer">
            <div className="footer-mobile">
                <div
                    className={`mobile-banner ${menuOpen ? "" : "gradient"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <h2 className="banner-title">Infos pratiques</h2>
                    <img
                        className={`banner-arrow ${menuOpen ? "open" : ""}`}
                        src="/images/arrow.png"
                        alt="flèche vers le bas indiquant qu'il y a plus d'informations"
                    />
                </div>

                <div
                    className={`mobile-informations ${
                        menuOpen ? "visible" : ""
                    }`}
                >
                    <a href="#">Mentions légales</a>
                    <a href="#">Conditions générale d'utilisation</a>
                    <a href="#">Conditions générales de ventes</a>
                    <a href="#">Politique de confidentialité</a>
                </div>
                <div className="mobile-copyright">
                    <p className="copyright">
                        Tiaré Assist' © 2025 - Designé et développé par Clément
                        Berthier Développeur
                    </p>
                </div>
            </div>

            <div className="footer-desktop"></div>
        </div>
    );
}
