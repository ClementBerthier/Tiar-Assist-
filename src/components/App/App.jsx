import { Helmet } from "react-helmet-async";
import Home from "../Home/Home";
import Services from "../Services/Services";
import AreaServed from "../AreaServed/AreaServed";
import Contact from "../Contact/Contact";

import "../../styles/App.css";
import Footer from "../Footer/Footer.jsx";

function App() {
    return (
        <main>
            <Helmet>
                <title>
                    Tiaré Assist' | Secrétariat indépendant à Toulouse et
                    Frouzins
                </title>
                <meta
                    name="description"
                    content="Secrétariat indépendant à Toulouse et Frouzins (31270). Tiaré Assist' : gestion administrative, rédaction, saisie de données, transcription audio et aide aux démarches pour entreprises et particuliers. Devis gratuit."
                />
                <link
                    rel="canonical"
                    href="https://www.tiareassist.fr/"
                />
                <meta
                    property="og:title"
                    content="Tiaré Assist' | Secrétariat indépendant à Toulouse et Frouzins"
                />
                <meta
                    property="og:description"
                    content="Secrétariat indépendant à Toulouse et Frouzins. Gestion administrative, rédaction, saisie de données et aide aux démarches. Formules sur mesure dès 50€/h. Devis gratuit."
                />
                <meta
                    property="og:url"
                    content="https://www.tiareassist.fr/"
                />
            </Helmet>
            <Home />
            <Services />
            <AreaServed />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
