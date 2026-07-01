"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Route error:", error);
    }, [error]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-7 text-center">
            <h1 className="font-heading text-2xl font-extrabold text-green-dark">
                Une erreur est survenue
            </h1>
            <p className="mt-3 text-muted">
                Désolée pour la gêne. Merci de réessayer.
            </p>
            <button type="button" onClick={reset} className="btn btn-primary mt-6">
                Réessayer
            </button>
        </main>
    );
}
