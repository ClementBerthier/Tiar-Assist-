import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./../../styles/Contact.css";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("sending");
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        setErrorMsg("");

        const trap = formRef.current?.element["website"];
        if (trap && trap.value.trim() !== "") {
            setStatus("error");
            setErrorMsg("Echec de l'envoi.");
            return;
        }
        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.SERVICE_ID,
                import.meta.env.TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.EMAILPUBLIC_KEY }
            );
            setStatus("sent");
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMsg("Une erreur est survenue. Merci de réessayer.");
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-bigcontainer">
                <h2 className="contact-title">Nous Contacter</h2>
                <p className="contact-description">
                    Vous avez envie de travailler avec moi ?<br></br> Remplissez
                    ce formulaire et je vous contacterai sous 24 h.
                </p>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="content-information">
                            <h3 className="information-title">
                                Contactez moi directement
                            </h3>
                            <div className="information-email">
                                <div className="email-picture">
                                    <img
                                        className="picture"
                                        src="/images/gmail.png"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="email-content">
                                    <p className="content-text">Email</p>
                                    <a
                                        className="content-link"
                                        href="mailto:tiareassist@gmail.com"
                                    >
                                        tiareassist@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="information-phone">
                                <div className="phone-picture">
                                    <img
                                        className="picture"
                                        src="/images/phone.png"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="phone-content">
                                    <p className="content-text">Téléphone</p>
                                    <a
                                        className="content-link"
                                        href="tel:+33645589876 "
                                    >
                                        06.45.58.95.76
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-note">
                            <img
                                className="note-picture"
                                src="/images/AvatarPersonnel.png"
                                alt="Avatar stylisé de la fondatrice de Tiaré Assist'"
                            />
                            <p className="note-text">
                                J'ai hâte que nous travaillions ensemble
                            </p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form
                            className="form"
                            ref={formRef}
                            onSubmit={onSubmit}
                        >
                            {/* Honeypot anti-spam : caché via CSS (display:none) */}
                            <input
                                type="text"
                                name="website"
                                autoComplete="off"
                                tabIndex="-1"
                                style={{
                                    position: "absolute",
                                    left: "-9999px",
                                }}
                                aria-hidden="true"
                            />
                            <div className="form-identity">
                                <div className="form-group">
                                    <label htmlFor="firstname">
                                        Prénom<span className="star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">
                                        Nom<span className="star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email<span className="star">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                    Message<span className="star">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <span className="required">*obligatoire</span>
                            <button type="submit" className="submit-btn">
                                <img
                                    className="submit-btn-picture"
                                    src="/images/paper-plane.png"
                                    alt=""
                                    aria-hidden="true"
                                />
                                <span>Envoyer le message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
