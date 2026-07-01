"use client";

import { useEffect, useRef } from "react";

export default function ConfirmModal({
    isOpen,
    onConfirm,
    onCancel,
    title = "Confirmation",
    message,
    confirmLabel = "Valider",
    cancelLabel = "Refuser",
}) {
    const confirmBtnRef = useRef(null);
    // Keep the latest onCancel without re-running the focus effect on every
    // parent render (which would steal focus back on each keystroke).
    const onCancelRef = useRef(onCancel);
    onCancelRef.current = onCancel;

    useEffect(() => {
        if (!isOpen) return;
        const previouslyFocused = document.activeElement;
        confirmBtnRef.current?.focus();

        const onKeyDown = (e) => {
            if (e.key === "Escape") onCancelRef.current?.();
        };
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        // Overlay click-to-close is a convenience for mouse users;
        // keyboard users close via the explicit cancel button or Escape.
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
            onClick={onCancel}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5"
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[420px] rounded-2xl bg-white p-7 shadow-card-lg"
            >
                <h2
                    id="confirm-modal-title"
                    className="mb-3 font-heading text-xl font-bold text-green-dark"
                >
                    {title}
                </h2>
                <p className="mb-6 text-muted">{message}</p>
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="btn btn-ghost"
                    >
                        {cancelLabel}
                    </button>
                    <button
                        ref={confirmBtnRef}
                        type="button"
                        onClick={onConfirm}
                        className="btn btn-primary"
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
