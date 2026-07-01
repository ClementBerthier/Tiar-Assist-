"use client";

import { useEffect, useRef, useState } from "react";
import PriceTable from "@/components/ui/PriceTable";
import { PRICING_NOTE } from "@/lib/services";

export default function PriceModalButton() {
    const [isOpen, setIsOpen] = useState(false);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        closeBtnRef.current?.focus();
        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="btn btn-ghost"
            >
                Voir la grille tarifaire
            </button>

            {isOpen && (
                // Overlay click-to-close is a convenience for mouse users;
                // keyboard users close via the explicit button or Escape.
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="price-modal-title"
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
                >
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-[90vh] w-full max-w-[920px] overflow-auto rounded-2xl bg-white p-6 shadow-card-lg max-[600px]:p-4"
                    >
                        <button
                            ref={closeBtnRef}
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Fermer"
                            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-green-dark hover:bg-green/10"
                        >
                            &times;
                        </button>

                        <h2
                            id="price-modal-title"
                            className="mb-1 font-heading text-xl font-bold text-green-dark"
                        >
                            Détail hors formule
                        </h2>
                        <p className="mb-5 text-sm text-muted">{PRICING_NOTE}</p>

                        <PriceTable />
                    </div>
                </div>
            )}
        </>
    );
}
