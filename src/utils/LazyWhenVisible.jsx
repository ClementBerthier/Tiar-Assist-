import { useEffect, useRef, useState } from "react";

export default function LazyWhenVisible({
    importFn,
    fallback = null,
    rootMargin = "0px",
    threshold = 0.01,
}) {
    const ref = useRef(null);
    const [Comp, setComp] = useState(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || Comp) return;

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    // Attendre le 1er paint pour ne pas bloquer la chaîne critique
                    const start = () => {
                        importFn().then((m) => setComp(() => m.default));
                    };
                    (window.requestIdleCallback || setTimeout)(start, 0);
                    io.disconnect();
                }
            },
            { root: null, rootMargin, threshold }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [Comp, importFn, rootMargin, threshold]);

    return <div ref={ref}>{Comp ? <Comp /> : fallback}</div>;
}
