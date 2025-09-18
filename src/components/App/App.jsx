import Home from "../Home/Home";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import { lazy, Suspense } from "react";

import "../../styles/App.css";
import Footer from "../Footer/Footer.jsx";

function App() {
    const Services = lazy(() => import("../Services/Services"));
    const Contact = lazy(() => import("../Contact/Contact"));
    const Footer = lazy(() => import("../Footer/Footer"));
    return (
        <>
            <Home />
            <Suspense fallback={<div>Loading...</div>}>
                <Services />
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
