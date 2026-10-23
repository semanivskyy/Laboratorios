# Clima — Laboratorio React + Vite

Muestra el clima actual de una ciudad elegida en un selector. Consulta la API pública [Open-Meteo](https://open-meteo.com/) (no requiere API key) y muestra temperatura, sensación térmica, humedad, viento y condición del cielo. La tarjeta cambia de estilo entre día y noche.

## Cómo ejecutarlo

    npm install
    npm run dev

Se abre en `http://localhost:5173`. Necesita conexión a internet para consultar la API.

## Ciudades disponibles

Montemorelos, Monterrey, Ciudad de México, Guadalajara, Cancún y Tijuana. Se pueden agregar más en `src/data/ciudades.js`.

## Estructura

    src/
    ├── components/
    │   ├── Clima.jsx          Componente principal (fetch, carga, error)
    │   └── Clima.module.css   Estilos con CSS Modules
    ├── data/
    │   ├── ciudades.js        Ciudades y coordenadas
    │   └── weatherCodes.js    Códigos del clima y su descripción
    └── App.jsx

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación para producción |
| `npm run preview` | Vista previa de la compilación |
| `npm run lint` | Revisión con ESLint |