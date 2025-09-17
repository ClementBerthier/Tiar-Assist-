import { useState } from "react";
import "../../styles/Services.css";
import ModalTarifs from "../Elements/ModalTarifs.jsx";

export default function Services() {
    const services = [
        {
            formula: "Formule Frangipanier",
            note: " (sur mesure)",
            price: "50€/h*",
            screenreader: "50 euros de l'heure",
            picture: "/images/FleurFrangipanier.webP",
            description:
                "De la plus petite tâche administrative occasionnelle à la tâche récurrente et volumineuse, de l’impression à la rédaction de mails, en passant par l’archivage et la gestion du quotidien. À partir de 50€ HT/heure.",
        },
        {
            formula: "Formule Hibiscus",
            note: "",
            price: "400€/semaine*",
            screenreader: "400 euros par semaine",
            picture: "/images/FleurHibiscus.webP",
            description:
                "Une absence maladie ? Un congé d’une semaine ou deux ? Vous avez besoin de quelqu’un qui gère l’essentiel rapidement ? Avoir quelqu’un sans passer par les intérims ? C’est la formule qu’il vous faut. À partir de 400€ HT/semaine.",
        },
        {
            formula: "Formule Tiaré",
            note: "",
            price: "1200€/mois*",
            screenreader: "1200 euros par mois",
            picture: "/images/FleurTiaré.webP",
            description:
                "Un remplacement d’un mois ou plus ? Besoin d’une gestion administrative quotidienne ? De vos appels en passant par les mails jusqu’au maintien de l’ordre administratif, cette formule sera plus adéquate. À partir de 1200€ HT/mois.",
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="services" id="services">
            <div className="services-container">
                <h2 className="services-title">Nos Services</h2>
                <p className="services-description">
                    Libérez-vous de l’administratif. Je prends en charge vos
                    mails, dossiers, mises en page, suivis et classements afin
                    que vous puissiez vous concentrer sur l’essentiel : votre
                    activité. Prestation à l’heure, à la semaine ou au mois.
                </p>
                <div className="services-list">
                    {services.map((service, index) => (
                        <div className="list-item" key={index}>
                            <img
                                className="item-picture"
                                src={service.picture}
                                alt=""
                                aria-hidden="true"
                            />
                            <h3 className="item-formula">
                                {service.formula}
                                {service.note}
                            </h3>
                            <p
                                className="item-price"
                                aria-label={service.price}
                            >
                                <strong>
                                    <span className="price">
                                        {service.price}
                                    </span>
                                </strong>
                            </p>
                            <p className="item-description">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="services-note">
                    *Tous nos tarifs sont des estimations minimales hors taxes.
                    Pour plus de détails sur les tarifs de nos services, voir la
                    grille tarifaire en cliquant ci-dessous.
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="services-button "
                >
                    Infos tarifs
                </button>
                <ModalTarifs
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
}
