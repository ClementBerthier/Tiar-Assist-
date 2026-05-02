import { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Circle,
    useMap,
    useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/AreaServed.css";

const cities = [
    {
        name: "Frouzins",
        postalCode: "31270",
        distance: "Siège social",
        coords: [43.5156, 1.3217],
        isHome: true,
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

const COLOR_HOME = "#265e42";
const COLOR_HOME_HOVER = "#1e4b34";
const COLOR_DEFAULT = "#a16b3f";
const COLOR_DEFAULT_HOVER = "#7d5026";
const COLOR_SELECTED = "#e07a3c";

const pinSvg = (color) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="28" height="36">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 8.5 12 20 12 20s12-11.5 12-20C24 5.373 18.627 0 12 0z" fill="${color}" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="4.5" fill="#ffffff"/>
    </svg>
`;

const buildIcon = (color) =>
    L.divIcon({
        html: pinSvg(color),
        className: "area-marker",
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -32],
    });

function MapController({ selectedCity, markerRefs, onMapClick }) {
    const map = useMap();

    useMapEvents({
        click() {
            onMapClick();
        },
    });

    useEffect(() => {
        if (!selectedCity) return;
        const city = cities.find((c) => c.name === selectedCity);
        if (!city) return;
        map.flyTo(city.coords, 13, { duration: 0.8 });
        const timeout = setTimeout(() => {
            const ref = markerRefs.current[selectedCity];
            if (ref) ref.openPopup();
        }, 850);
        return () => clearTimeout(timeout);
    }, [selectedCity, map, markerRefs]);

    return null;
}

export default function AreaServed() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [hoveredCity, setHoveredCity] = useState(null);
    const markerRefs = useRef({});
    const center = [43.53, 1.355];

    const toggleCity = (name) => {
        setSelectedCity((prev) => (prev === name ? null : name));
    };

    const getIconFor = (city) => {
        if (selectedCity === city.name) return buildIcon(COLOR_SELECTED);
        if (hoveredCity === city.name) {
            return buildIcon(
                city.isHome ? COLOR_HOME_HOVER : COLOR_DEFAULT_HOVER,
            );
        }
        return buildIcon(city.isHome ? COLOR_HOME : COLOR_DEFAULT);
    };

    return (
        <section className="area-served" id="zone">
            <div className="area-container">
                <h2 className="area-title">Zone d'intervention</h2>
                <p className="area-description">
                    Basée à Frouzins, j'interviens en présentiel dans tout le
                    sud-ouest toulousain et accompagne mes clients à Toulouse,
                    Cugnaux, Villeneuve-Tolosane, Muret, Seysses et leurs
                    alentours. Pour les missions à distance, le télétravail me
                    permet d'assister des entreprises et particuliers partout en
                    France.
                </p>

                <div className="area-map-wrapper">
                    <MapContainer
                        center={center}
                        zoom={11}
                        scrollWheelZoom={false}
                        className="area-map"
                        aria-label="Carte de la zone d'intervention dans le sud-ouest toulousain"
                    >
                        <MapController
                            selectedCity={selectedCity}
                            markerRefs={markerRefs}
                            onMapClick={() => setSelectedCity(null)}
                        />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Circle
                            center={cities[0].coords}
                            radius={8000}
                            pathOptions={{
                                color: "#265e42",
                                fillColor: "#265e42",
                                fillOpacity: 0.08,
                                weight: 1.5,
                            }}
                        />
                        {cities.map((city) => (
                            <Marker
                                key={city.name}
                                position={city.coords}
                                icon={getIconFor(city)}
                                ref={(ref) => {
                                    if (ref)
                                        markerRefs.current[city.name] = ref;
                                }}
                                eventHandlers={{
                                    click: () => toggleCity(city.name),
                                }}
                            >
                                <Popup>
                                    <strong>{city.name}</strong>
                                    <br />
                                    {city.postalCode}
                                    <br />
                                    <em>{city.distance}</em>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <ul className="area-cities" aria-label="Communes desservies">
                    {cities.map((city) => {
                        const isSelected = selectedCity === city.name;
                        return (
                            <li key={city.name}>
                                <button
                                    type="button"
                                    className={`city-tag${city.isHome ? " home" : ""}${
                                        isSelected ? " active" : ""
                                    }`}
                                    onClick={() => toggleCity(city.name)}
                                    onMouseEnter={() =>
                                        setHoveredCity(city.name)
                                    }
                                    onMouseLeave={() => setHoveredCity(null)}
                                    onFocus={() => setHoveredCity(city.name)}
                                    onBlur={() => setHoveredCity(null)}
                                    aria-pressed={isSelected}
                                >
                                    <span className="tag-name">
                                        {city.name}
                                    </span>
                                    <span className="tag-postal">
                                        {city.postalCode}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <p className="area-note">
                    Une mission en dehors de cette zone ? Contactez-moi : la
                    plupart de mes prestations peuvent être réalisées
                    intégralement en télétravail.
                </p>
            </div>
        </section>
    );
}
