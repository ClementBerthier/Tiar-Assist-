import Home from "../Home/Home";
import Services from "../Services/Services";
import { lazy, Suspense } from "react";

import "../../styles/App.css";

function App() {
    const Contact = lazy(() => import("../Contact/Contact"));
    const Footer = lazy(() => import("../Footer/Footer"));
    return (
        <>
            <Home />
            <Services />
            <Suspense fallback={<div>Loading...</div>}>
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
