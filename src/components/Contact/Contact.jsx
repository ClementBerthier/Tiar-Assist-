import "./../../styles/Contact.css";
export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact-title">Nous Contacter</h2>
            <p className="contact-description">
                Vous avez envie de travailler avec moi ? Remplissez ce
                formulaire et je vous contacterai sous 24 h.
            </p>
            <div className="contact-content">
                <div className="content-information">
                    <h3 className="information-title">
                        Contactez moi directement
                    </h3>
                    <div className="information-email">
                        <div className="email-picture">
                            <img src="" alt="" aria-hidden="true" />
                        </div>
                        <div className="email-content">
                            <p className="content-text">Email</p>
                            <a className="content-link" href=""></a>
                        </div>
                    </div>
                    <div className="information-phone">
                        <div className="phone-picture">
                            <img src="" alt="" aria-hidden="true" />
                        </div>
                        <div className="phone-content">
                            <p className="content-text">Téléphone</p>
                            <a className="content-link" href="tel: ">
                                XXXXXXXXXXXX
                            </a>
                        </div>
                    </div>
                    <div className="information-adress">
                        <div className="adress-picture">
                            <img src="" alt="" aria-hidden="true" />
                        </div>
                        <div className="adress-content">
                            <p className="content-text">Adresse</p>
                            <a className="content-link" href=""></a>
                        </div>
                    </div>
                </div>
                <div className="content-note">
                    <img
                        className="note-picture"
                        src="/images/AvatarPersonnel.png"
                        alt="Avatar stylisé de la fondatrice de Tiaré Assist'"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
            <div className="contact-form">
                <form className="form" action="">
                    <div className="form-identity">
                        <div className="form-group">
                            <label htmlFor="firstname">Prénom*</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Nom*</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        <img
                            className="submit-btn-picture"
                            src=""
                            alt=""
                            aria-hidden="true"
                        />
                        <span>Envoyer le message</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
