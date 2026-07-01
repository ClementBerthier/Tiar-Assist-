"use client";

import { useEffect } from "react";
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

const COLOR_HOME = "#23613f";
const COLOR_HOME_HOVER = "#163a28";
const COLOR_DEFAULT = "#a16b3f";
const COLOR_DEFAULT_HOVER = "#7d5026";
const COLOR_SELECTED = "#cb6a2c";

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

function MapController({ cities, selectedCity, markerRefs, onMapClick }) {
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
            markerRefs.current[selectedCity]?.openPopup();
        }, 850);
        return () => clearTimeout(timeout);
    }, [cities, selectedCity, map, markerRefs]);

    return null;
}

export default function ZoneMap({
    cities,
    selectedCity,
    hoveredCity,
    markerRefs,
    onToggle,
    onClearSelection,
}) {
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
        <MapContainer
            center={[43.53, 1.355]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-[420px] w-full"
            aria-label="Carte de la zone d'intervention dans le sud-ouest toulousain"
        >
            <MapController
                cities={cities}
                selectedCity={selectedCity}
                markerRefs={markerRefs}
                onMapClick={onClearSelection}
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
                center={cities[0].coords}
                radius={8000}
                pathOptions={{
                    color: COLOR_HOME,
                    fillColor: COLOR_HOME,
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
                        if (ref) markerRefs.current[city.name] = ref;
                    }}
                    eventHandlers={{ click: () => onToggle(city.name) }}
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
    );
}
