# Salomon XT-6 Store — Laboratorio React + Vite

Ficha de producto estilo tienda en línea para zapatillas Salomon, con tres modelos: **XT-6 Expanse / Skyline**, **Speedcross 6** y **ACS Pro**.

## Funciones

- Buscador para cambiar de producto.
- Galería de imágenes y selector de color.
- Selector de talla con cambio de sistema (EUR, US hombre, US mujer y CM). Es obligatorio elegir una talla antes de añadir a la bolsa.
- Especificaciones técnicas y tecnologías del producto.
- Bolsa de compras en un panel lateral, guardada en `localStorage`.

## Cómo ejecutarlo

    npm install
    npm run dev

Se abre en `http://localhost:5173`.

## Tecnologías

React 19, Vite, Tailwind CSS 3 (con PostCSS y Autoprefixer) e íconos de Lucide.

## Estructura

    src/
    ├── components/   Navbar, ProductSearch, ImageGallery, ColorSelector,
    │                 SizeSelector, TechnicalSpecs, CartDrawer
    ├── data/shoesData.js   Catálogo de productos
    └── App.jsx

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación para producción |
| `npm run preview` | Vista previa de la compilación |
| `npm run lint` | Revisión con ESLint |