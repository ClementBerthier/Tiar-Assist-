import "./../../styles/Header.css";

export default function HeaderMention() {
    return (
        <header className="header">
            <div className="header-logo">
                <img
                    className="logo-picture"
                    src="/images/LogoTiare.png"
                    alt="Logo Tiaré Assist'"
                />
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="list-item">
                        <a className="item-link" href="/">
                            Accueil
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href="/services">
                            Services
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
