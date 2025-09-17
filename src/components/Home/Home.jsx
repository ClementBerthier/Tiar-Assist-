import Header from "../Header/Header.jsx";
import { useIsMobile } from "../../hook/useIsMobile.js";
import "./../../styles/Home.css";
export default function Home() {
    const isMobile = useIsMobile();
    return (
        <>
            <Header />
            <div className="home" id="accueil">
                <div className="home-picture">
                    {!isMobile ? (
                        <img
                            src="/images/DesktopHome.webP"
                            alt="Environnement de travail sobre et élégant illustrant les services de secrétariat"
                        />
                    ) : (
                        <img
                            src="/images/DesktopHomeMobile.webP"
                            alt="Environnement de travail sobre et élégant illustrant les services de secrétariat"
                        />
                    )}
                </div>
                <div className="home-content">
                    <h2 className="content-title">
                        Découvrez mes services de secrétariat{" "}
                    </h2>
                    <p className="content-description">
                        À travers mes différentes formules, vous retrouverez des
                        services de secrétariat ainsi que de gestion commerciale
                        et informatique, tels que la rédaction de documents, la
                        saisie de données, la transcription audio, la gestion du
                        SAV de vos logiciels, la gestion des stocks avec vos
                        fournisseurs, et bien plus encore. Je m'adapte à vos
                        besoins pour vous offrir un service personnalisé et
                        efficace.
                    </p>
                    <div className="content-comment">
                        <div className="comment-picture">
                            <img
                                src="/images/AvatarPersonnelMobile.webP"
                                alt="Avatar stylisé de la fondatrice de Tiaré Assist'"
                            />
                        </div>
                        <div className="comment-text">
                            <h3 className="text-author">Mandy Micheau</h3>
                            <p className="text-description">
                                Fondatrice de Tiaré Assist'
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {!isMobile ? (
                <>
                    {" "}
                    <img
                        className="home-filigrane"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane2"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane3"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane4"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane5"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane6"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane7"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane8"
                        src="/images/FiligraneTiare.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                </>
            ) : (
                <>
                    {" "}
                    <img
                        className="home-filigrane"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane2"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane3"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane4"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane5"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane6"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane7"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-filigrane8"
                        src="/images/FiligraneTiareMobile.webP
            "
                        alt=""
                        aria-hidden="true"
                    />
                </>
            )}
        </>
    );
}
