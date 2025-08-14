import Header from "../Header/Header.jsx";
import "./../../styles/Home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div className="home-picture">
                    <img
                        src="/images/DesktopHome.png"
                        alt="Environnement de travail sobre et élégant illustrant les services de secrétariat"
                    />
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
                                src="/images/AvatarPersonnel.png"
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
            <img
                className="home-filigrane"
                src="/images/FiligraneTiare.png
            "
                alt=""
                aria-hidden="true"
            />
            <img
                className="home-filigrane2"
                src="/images/FiligraneTiare.png
            "
                alt=""
                aria-hidden="true"
            />
        </>
    );
}
