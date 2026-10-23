# Laboratorios de Programación FrontEnd

**Alumno:** Genrikh Semanivskyy Slobodenyuk

Cada carpeta es un proyecto independiente, con su propio `package.json`.

| Carpeta | Laboratorio | Tecnologías |
|---|---|---|
| `lab-fullstack-frontend/` | CRUD Fullstack: API REST y dos clientes | Node.js, Express, HTML5, Bootstrap 5, React + Vite |
| `lab_react_login_dashboard/` | Login y dashboards por rol | React + Vite |
| `aerolinea/aerolineas-kaiser/` | Sistema de reserva de vuelos | React + Vite, CSS |
| `salomon-xt6-store/` | Ficha de producto estilo Salomon XT-6 | React + Vite, Tailwind CSS 3, Lucide |
| `clima/clima/` | Clima | React + Vite, CSS Modules |

## Cómo ejecutar un proyecto

    cd carpeta-del-proyecto
    npm install
    npm run dev

Las carpetas `node_modules` no están en el repositorio, por eso hay que ejecutar `npm install` primero.

## Lab CRUD Fullstack

Tiene tres subproyectos que usan la misma API:

- `backend-api/`: servidor en `http://localhost:3000` (`npm run dev`).
- `frontend-bootstrap/`: cliente con Live Server (abrir `index.html`).
- `frontend-react/`: cliente en `http://localhost:5173` (`npm run dev`).

Primero se levanta el backend y después cualquiera de los clientes. En `evidencias/` están las capturas y en `REPORTE.md` la comparativa entre ambos clientes.
