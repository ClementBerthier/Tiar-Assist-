import { useEffect, useRef, useState, Suspense } from "react";

export default function LazyWhenVisible({
    loader,
    fallback = null,
    rootMargin = "200px",
}) {
    const ref = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || shouldLoad) return;

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setShouldLoad(true);
                    io.disconnect();
                }
            },
            { root: null, rootMargin, threshold: 0.01 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [rootMargin, shouldLoad]);

    return (
        <div ref={ref}>
            {shouldLoad ? (
                <Suspense fallback={fallback}>{loader()}</Suspense>
            ) : (
                fallback
            )}
        </div>
    );
}
