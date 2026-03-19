import "../../styles/ModalTarifs.css";

export default function ModalTarifs({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h2 className="modal-title">Détail hors formule </h2>
                <img
                    className="modal-picture"
                    src="/images/Priceboard.webP"
                    alt="Grille tarifaire détaillée des prestations de secrétariat Tiaré Assist' hors formules"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
