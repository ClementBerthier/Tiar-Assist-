import "./../../styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img
                    className="logo-picture"
                    src="/images/LogoTiare.png"
                    alt="Logo Tiaré Assist, une fleur de Tiaré stylisée en blanc et jaune et rouge contenant la lettre M au millieu"
                />
            </div>
            <div className="header-presentation">
                <h1 className="presentation-title">
                    Bienvenue chez Tiaré Assist'
                </h1>
                <p className="presentation-text">
                    Après 20 ans dans l’administration et l’informatique, dont
                    11 en télétravail, j’ai choisi l’auto-entrepreneuriat pour
                    allier ma vie personnelle et professionnelle. Je vous
                    propose mes services en présentiel ou en télétravail, mais
                    toujours avec autant de rigueur et de professionnalisme.
                </p>
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="list-item">
                        <a className="item-link" href="#accueil">
                            Accueil
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href="#services">
                            Services
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
