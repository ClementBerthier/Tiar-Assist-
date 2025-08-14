import { useState } from "react";
import "../../styles/Services.css";
import ModalTarifs from "../Elements/ModalTarifs.jsx";

export default function Services() {
    const services = [
        {
            formula: "Formule Frangipanier",
            note: " (sur mesure)",
            flower: "Frangipanier",
            price: "50€/h*",
            screenreader: "50 euros de l'heure",
            picture: "/images/FleurFrangipanier.png",
            description:
                "De la plus petite tâche administrative occasionnelle à la tâche récurrente et volumineuse, de l’impression à la rédaction de mails, en passant par l’archivage et la gestion du quotidien. À partir de 50€ HT/heure.",
        },
        {
            formula: "Formule Hibiscus",
            note: "",
            flower: "Hibiscus",
            price: "400€/semaine*",
            screenreader: "400 euros par semaine",
            picture: "/images/FleurHibiscus.png",
            description:
                "Une absence maladie ? Un congé d’une semaine ou deux ? Vous avez besoin de quelqu’un qui gère l’essentiel rapidement ? Avoir quelqu’un sans passer par les intérims ? C’est la formule qu’il vous faut. À partir de 400€ HT/semaine.",
        },
        {
            formula: "Formule Tiaré",
            note: "",
            flower: "Tiaré",
            price: "1200€/mois*",
            screenreader: "1200 euros par mois",
            picture: "/images/FleurTiaré.png",
            description:
                "Un remplacement d’un mois ou plus ? Besoin d’une gestion administrative quotidienne ? De vos appels en passant par les mails jusqu’au maintien de l’ordre administratif, cette formule sera plus adéquate. À partir de 1200€ HT/mois.",
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="services">
            <h2 className="services-title">Nos Services</h2>
            <p className="services-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                explicabo facere quas nihil ipsam quidem aperiam et non soluta
                consequatur, nostrum, odio minima quis fugit laboriosam? Veniam
                reiciendis sunt dolorem.
            </p>
            <div className="services-list">
                {services.map((service, index) => (
                    <div className="list-item" key={index}>
                        <img
                            className="item-picture"
                            src={service.picture}
                            alt={`Fleur ${service.flower}`}
                        />
                        <h3 className="item-formula">
                            {service.formula}
                            {service.note}
                        </h3>
                        <p className="item-price" aria-label={service.price}>
                            <strong>
                                <span className="price">{service.price}</span>
                            </strong>
                        </p>
                        <p className="item-description">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <p className="services-note">
                *Tous nos tarifs sont des estimations minimales hors taxes. Pour
                plus de détails sur les tarifs de nos services, voir la grille
                tarifaire en cliquant ci-dessous.
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
    );
}
