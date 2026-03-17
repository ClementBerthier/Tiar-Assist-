import Home from "../Home/Home";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

import "../../styles/App.css";
import Footer from "../Footer/Footer.jsx";

function App() {
    return (
        <main>
            <Home />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
