import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./../../styles/Contact.css";
import { useIsMobile } from "../../hook/useIsMobile.js";
import ConfirmModal from "../Elements/ConfirmModal.jsx";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const isMobile = useIsMobile();

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const onSubmit = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const handleCancel = () => {
        setShowConfirm(false);
    };

    const handleConfirm = async () => {
        setShowConfirm(false);
        setErrorMsg("");
        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: publicKey,
                },
            );
            setStatus("sent");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
            setErrorMsg("Une erreur est survenue. Merci de réessayer.");
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-bigcontainer">
                <h2 className="contact-title">Nous Contacter</h2>
                <p className="contact-description">
                    Vous avez envie de travailler avec moi ?<br /> Remplissez ce
                    formulaire et je vous contacterai sous 24 h.
                </p>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="content-information">
                            <h3 className="information-title">
                                Contactez-moi directement
                            </h3>
                            <div className="information-email">
                                <div className="email-picture">
                                    <img
                                        className="picture"
                                        src="/images/gmail.webP"
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
                                        src="/images/phone.webP"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="phone-content">
                                    <p className="content-text">Téléphone</p>
                                    <a
                                        className="content-link"
                                        href="tel:+33645589576"
                                    >
                                        06.45.58.95.76
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="content-note">
                            {!isMobile ? (
                                <img
                                    className="note-picture"
                                    src="/images/AvatarPersonnel.webP"
                                    alt="Mandy Micheau, fondatrice de Tiaré Assist', secrétaire indépendante à Toulouse"
                                    loading="lazy"
                                />
                            ) : (
                                <img
                                    className="note-picture"
                                    src="/images/AvatarPersonnel.webP"
                                    alt="Mandy Micheau, fondatrice de Tiaré Assist', secrétaire indépendante à Toulouse"
                                    loading="lazy"
                                />
                            )}

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

                            {/* feedback utilisateur */}
                            {status === "sending" && (
                                <p className="form-status">Envoi en cours…</p>
                            )}
                            {status === "sent" && (
                                <p className="form-status success">
                                    Message envoyé ✅
                                </p>
                            )}
                            {status === "error" && (
                                <p className="form-status error">{errorMsg}</p>
                            )}

                            <span className="required">*obligatoire</span>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={status === "sending"}
                            >
                                <img
                                    className="submit-btn-picture"
                                    src="/images/paper-plane.webP"
                                    alt=""
                                    aria-hidden="true"
                                />
                                <span>
                                    {status === "sending"
                                        ? "Envoi..."
                                        : "Envoyer le message"}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ConfirmModal
                isOpen={showConfirm}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                title="Confirmer l'envoi"
                message="En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité."
                confirmLabel="Valider"
                cancelLabel="Refuser"
            />
        </section>
    );
}
