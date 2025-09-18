import { lazy } from "react";
import LazyWhenVisible from "../Utils/LazyWhenVisible";

const Contact = lazy(() => import("../Contact/Contact"));
const Footer = lazy(() => import("../Footer/Footer"));

export default function App() {
    return (
        <>
            <Home />
            <Services />
            <LazyWhenVisible
                fallback={<div style={{ minHeight: 300 }}>Chargement…</div>}
                loader={() => <Contact />}
            />
            <LazyWhenVisible
                fallback={<div style={{ minHeight: 200 }} />}
                loader={() => <Footer />}
            />
        </>
    );
}
