# Cliente React — CRUD de Tareas

Cliente en React + Vite (con Bootstrap 5 por npm) del CRUD de tareas. Consume la API de `../backend-api` en `http://localhost:3000/api/tareas`.

## Cómo ejecutarlo

1. Levantar primero el backend:

        cd ../backend-api
        npm install
        npm run dev

2. En otra terminal, levantar este cliente:

        cd ../frontend-react
        npm install
        npm run dev

Se abre en `http://localhost:5173`. Si el backend está apagado, la aplicación muestra un mensaje de error.

## Estructura

    src/
    ├── components/
    │   ├── TaskForm.jsx   Formulario para crear y editar
    │   └── TaskItem.jsx   Fila de cada tarea
    └── App.jsx            Estado y llamadas a la API

La comparativa con el cliente HTML5/Bootstrap está en `../REPORTE.md`.