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
                        src="/images/arrow.webP"
                        alt="flèche vers le bas indiquant qu'il y a plus d'informations"
                    />
                </div>

                <div
                    className={`mobile-informations ${
                        menuOpen ? "visible" : ""
                    }`}
                >
                    <a href="/">Accueil</a>
                    <a href="/ML">Mentions légales</a>
                    <a href="/CGU">Conditions générale d'utilisation</a>
                    <a href="/CGV">Conditions générales de ventes</a>
                    <a href="/PrivacyPolicy">Politique de confidentialité</a>
                </div>
                <div></div>
                <div className="mobile-copyright">
                    <p className="copyright">
                        Tiaré Assist' © 2025 - Designé et développé par Clément
                        Berthier Développeur
                    </p>
                </div>
            </div>

            <div className="footer-desktop">
                <div className="desktop-banner"></div>
                <div className="desktop-container">
                    <div className="container-about">
                        <div className="about-logo">
                            <img
                                className="logo-picture"
                                src="/images/LogoTiareFooter.webP"
                                alt="Logo Tiaré Assist'"
                            />
                            <h2 className="logo-title">Tiaré Assist'</h2>
                        </div>
                        <div className="about-description">
                            <p className="description-text">
                                Des solutions adaptées à vos besoins. Je mets
                                mon expertise à votre service pour une gestion
                                plus simple et professionnelle de vos projets.
                            </p>
                        </div>
                    </div>
                    <div className="container-navigation">
                        <h2 className="navigation-title">Navigation</h2>
                        <a className="navigation-link" href="#accueil">
                            Accueil
                        </a>
                        <a className="navigation-link" href="#services">
                            Services
                        </a>
                        <a className="navigation-link" href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className="container-contact">
                        <h2 className="contact-title">Contact</h2>
                        <div className="contact-infos">
                            <a
                                className="infos-link"
                                href="mailto:tiareassist@gmail.com"
                            >
                                tiareassist@gmail.com
                            </a>
                            <a className="infos-link" href="tel:+33645589876">
                                06.45.58.98.76
                            </a>
                        </div>
                        <div className="contact-socials">
                            <a className="socials-link" href="">
                                <img className="link-picture" src="" alt="" />
                            </a>
                            <a className="socials-link" href="">
                                <img className="link-picture" src="" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="desktop-line">
                    <div className="line"></div>
                </div>
                <div className="desktop-copyright">
                    <p className="copyright">
                        Tiaré Assist' © 2025 - Designé et développé par{" "}
                        <a href="https://www.clementberthierdeveloppeur.fr/">
                            Clément Berthier Développeur{" "}
                        </a>
                        - <a href="/ML">Mentions légales</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
