import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNvZGV2NyIsImEiOiJjbWtwd25zdnUwbDR4M2VwcWdieXdlaHgwIn0.P1JWCViZ2S69lkHcSyGi0w";

// Verificar si el navegador soporta la API de Geolocalización
if (!navigator.geolocation) {
  alert("Tu navegador no soporta Geolocalización");
  throw new Error("Tu navegador no soporta Geolocalización");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
);
