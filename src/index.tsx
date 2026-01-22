import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

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
