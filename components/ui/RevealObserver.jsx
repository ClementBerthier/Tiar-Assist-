"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds the `in` class to every `.reveal` element once it scrolls into view,
 * driving the fade-up animation. No-op for users who prefer reduced motion
 * (handled in CSS). Re-runs on every route change so freshly rendered pages
 * get their elements observed (the layout never remounts in the App Router).
 */
export default function RevealObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
