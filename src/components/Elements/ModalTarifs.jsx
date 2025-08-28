import "../../styles/ModalTarifs.css";

export default function ModalTarifs({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h2>Titre de la modale</h2>
                <p>Ceci est le contenu de la modale.</p>
            </div>
        </div>
    );
}
// TODO: À finir et intégrer dans la page Tarifs
