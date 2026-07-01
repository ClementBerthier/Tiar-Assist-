import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Zone from "@/components/sections/Zone";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Zone />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
