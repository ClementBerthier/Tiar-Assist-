import "../../styles/ConfirmModal.css";

export default function ConfirmModal({
    isOpen,
    onConfirm,
    onCancel,
    title = "Confirmation",
    message,
    confirmLabel = "Valider",
    cancelLabel = "Refuser",
}) {
    if (!isOpen) return null;

    return (
        <div
            className="confirm-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
            onClick={onCancel}
        >
            <div
                className="confirm-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="confirm-modal-title" className="confirm-modal-title">
                    {title}
                </h2>
                <p className="confirm-modal-message">{message}</p>
                <div className="confirm-modal-actions">
                    <button
                        type="button"
                        className="confirm-modal-btn cancel"
                        onClick={onCancel}
                    >
                        {cancelLabel}
                    </button>
                    <button
                        type="button"
                        className="confirm-modal-btn confirm"
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
