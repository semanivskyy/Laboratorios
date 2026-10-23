# Laboratorios de Programación FrontEnd

**Alumno:** Genrikh Semanivskyy Slobodenyuk

Cada carpeta de proyecto es independiente y tiene su propio `package.json`.

## Estructura del repositorio

| Carpeta | Laboratorio | Tecnologías |
|---|---|---|
| `lab-fullstack-frontend/` | CRUD Fullstack: API REST y dos clientes | Node.js, Express, HTML5, Bootstrap 5, React + Vite |
| `lab_react_login_dashboard/` | Login y dashboards por rol | React + Vite |
| `aerolineas-angelicales/` | Sistema de reserva de vuelos | React + Vite, CSS |
| `salomon-xt6-store/` | Ficha de producto estilo Salomon XT-6 | React + Vite, Tailwind CSS 3, Lucide |
| `clima/` | Clima actual por ciudad | React + Vite, CSS Modules, API Open-Meteo |
| `documentos/` | Guías de los laboratorios (`.docx` y `.pdf`) | — |
| `evidencias/` | Capturas de pantalla del lab CRUD Fullstack | — |

## Cómo ejecutar un proyecto

    cd carpeta-del-proyecto
    npm install
    npm run dev

Las carpetas `node_modules` no están en el repositorio, por eso hay que ejecutar `npm install` primero. Los proyectos de Vite abren por defecto en `http://localhost:5173`.

## Lab CRUD Fullstack (`lab-fullstack-frontend/`)

Tiene tres subproyectos que usan la misma API:

- `backend-api/`: servidor en `http://localhost:3000` (`npm run dev`).
- `frontend-bootstrap/`: cliente con Live Server (abrir `index.html`).
- `frontend-react/`: cliente en `http://localhost:5173` (`npm run dev`).

Primero se levanta el backend y después cualquiera de los clientes. Las capturas están en `evidencias/` y la comparativa entre ambos clientes en `lab-fullstack-frontend/REPORTE.md`.

## Documentos de los laboratorios

En `documentos/` están las guías:

- `Laboratorio_Programacion_Frontend_CRUD_Node_React_Bootstrap.docx`
- `Laboratorio_React_Login_Dashboards.pdf`
- `Laboratorio_React_Vite_Salomon_XT6.docx`
- `Practica_Laboratorio_React_Vite_Aerolineas_Angelicales.docx`
