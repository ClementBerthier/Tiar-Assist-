import { Helmet } from "react-helmet-async";
import HeaderMention from "../Header/HeaderMention.jsx";
import Footer from "../Footer/Footer.jsx";
import "./../../styles/NotFound.css";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page introuvable | Tiaré Assist'</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <HeaderMention />
            <div className="notFound">
                <div className="notFound-card">
                    <h1 className="notFound-code">404</h1>
                    <h2 className="notFound-title">
                        Oups, cette page n'existe pas
                    </h2>
                    <p className="notFound-text">
                        La page que vous recherchez semble avoir disparu ou
                        n'a jamais existé.
                    </p>
                    <a className="notFound-link" href="/">
                        Retour à l'accueil
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
