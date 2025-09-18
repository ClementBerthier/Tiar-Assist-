import Home from "../Home/Home";
import Services from "../Services/Services"; // si visible au-dessus du pli, NE PAS lazy-load
import LazyWhenVisible from "../../utils/LazyWhenVisible.jsx";

export default function App() {
    return (
        <>
            <Home />
            <Services />

            {/* Contact seulement quand visible */}
            <LazyWhenVisible
                importFn={() => import("../Contact/Contact")} // <— import dynamique uniquement à l’intersection
                fallback={<div style={{ minHeight: 320 }} aria-hidden="true" />}
                rootMargin="0px" // pas de chargement anticipé
                threshold={0.01}
            />

            {/* Footer encore plus tard */}
            <LazyWhenVisible
                importFn={() => import("../Footer/Footer")}
                fallback={<div style={{ minHeight: 200 }} aria-hidden="true" />}
                rootMargin="0px"
                threshold={0.01}
            />
        </>
    );
}
