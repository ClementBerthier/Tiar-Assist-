"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const CITIES = [
    {
        name: "Frouzins",
        postalCode: "31270",
        distance: "Siège social",
        coords: [43.5156, 1.3217],
        isHome: true,
        tag: "siège",
    },
    {
        name: "Cugnaux",
        postalCode: "31270",
        distance: "à 3 km",
        coords: [43.5403, 1.3464],
    },
    {
        name: "Villeneuve-Tolosane",
        postalCode: "31270",
        distance: "à 2 km",
        coords: [43.535, 1.3389],
    },
    {
        name: "Seysses",
        postalCode: "31600",
        distance: "à 2 km",
        coords: [43.5008, 1.3197],
    },
    {
        name: "Muret",
        postalCode: "31600",
        distance: "à 6 km",
        coords: [43.4622, 1.3267],
    },
    {
        name: "Toulouse",
        postalCode: "31000",
        distance: "à 13 km",
        coords: [43.6045, 1.4442],
    },
];

const ZoneMap = dynamic(() => import("./ZoneMap"), {
    ssr: false,
    loading: () => (
        <div className="flex h-[420px] w-full items-center justify-center bg-sand-deep text-muted">
            Chargement de la carte…
        </div>
    ),
});

export default function Zone() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [hoveredCity, setHoveredCity] = useState(null);
    const markerRefs = useRef({});

    const toggleCity = (name) =>
        setSelectedCity((prev) => (prev === name ? null : name));

    return (
        <section id="zone" className="bg-cream py-[90px]">
            <div className="mx-auto max-w-[1180px] px-7">
                <div className="reveal mx-auto mb-[54px] max-w-[40em] text-center">
                    <span className="eyebrow">
                        <span className="eyebrow-dot" /> Zone d&apos;intervention
                    </span>
                    <h2 className="mb-3 mt-[18px] font-heading text-[clamp(1.95rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.018em] text-green-dark">
                        Dans tout le sud-ouest toulousain
                    </h2>
                    <p className="text-[1.06rem] text-muted">
                        Basée à Frouzins, j&apos;interviens en présentiel à
                        Toulouse, Cugnaux, Villeneuve-Tolosane, Muret, Seysses et
                        alentours. À distance, le télétravail me permet
                        d&apos;assister pros et particuliers partout en France.
                    </p>
                </div>

                <div className="reveal mx-auto max-w-[920px] overflow-hidden rounded-[24px] border-[6px] border-white bg-sand-deep shadow-card-lg">
                    <ZoneMap
                        cities={CITIES}
                        selectedCity={selectedCity}
                        hoveredCity={hoveredCity}
                        markerRefs={markerRefs}
                        onToggle={toggleCity}
                        onClearSelection={() => setSelectedCity(null)}
                    />
                </div>

                <ul
                    className="reveal d1 mx-auto mt-[30px] flex max-w-[800px] flex-wrap justify-center gap-3"
                    aria-label="Communes desservies"
                >
                    {CITIES.map((city) => {
                        const isSelected = selectedCity === city.name;
                        return (
                            <li key={city.name}>
                                <button
                                    type="button"
                                    onClick={() => toggleCity(city.name)}
                                    onMouseEnter={() => setHoveredCity(city.name)}
                                    onMouseLeave={() => setHoveredCity(null)}
                                    onFocus={() => setHoveredCity(city.name)}
                                    onBlur={() => setHoveredCity(null)}
                                    aria-pressed={isSelected}
                                    className={`inline-flex items-center gap-2 rounded-full border-[1.5px] px-[18px] py-[9px] font-heading text-[0.9rem] font-semibold transition hover:-translate-y-0.5 ${
                                        city.isHome
                                            ? "border-green bg-green text-white"
                                            : isSelected
                                              ? "border-terracotta bg-terracotta text-white"
                                              : "border-green/[0.18] bg-white text-green-dark hover:border-green"
                                    }`}
                                >
                                    {city.name}
                                    <small
                                        className={`font-normal ${city.isHome ? "text-[#cfe0d6]" : isSelected ? "text-white/80" : "text-muted"}`}
                                    >
                                        {city.postalCode}
                                        {city.tag ? ` · ${city.tag}` : ""}
                                    </small>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <p className="reveal d1 mx-auto mt-7 max-w-[40em] text-center text-[0.95rem] text-muted">
                    Une mission en dehors de cette zone ? Contactez-moi : la
                    plupart de mes prestations se réalisent intégralement en
                    télétravail.
                </p>
            </div>
        </section>
    );
}
