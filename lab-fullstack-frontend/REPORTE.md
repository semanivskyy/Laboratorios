# Reporte comparativo: HTML5/Bootstrap + JS Vanilla vs React

**Alumno:** Genrikh Semanivskyy Slobodenyuk  **Fecha:** 22/10/2026

## 1. Descripción

Un mismo backend REST (Node.js + Express, puerto 3000) con CRUD de tareas es consumido por dos clientes distintos: el Cliente 1 (HTML5, Bootstrap 5 y JavaScript Vanilla con Fetch) y el Cliente 2 (React con Vite). Ambos usan los mismos endpoints (`/api/tareas`) y producen la misma interfaz.

## 2. Evidencias

- Backend probado con `pruebas.http` (GET, POST, PUT, DELETE): ver `../evidencias/`.
- Cliente 1 (HTML5 + Bootstrap) funcionando: ver `../evidencias/Captura de pantalla 2026-09-17 155711.png`.

## 3. Comparación

| Aspecto | Vanilla + Bootstrap | React + Vite |
|---|---|---|
| Archivos principales | `index.html` (93 líneas) + `app.js` (157) | `App.jsx` (162) + `TaskForm.jsx` (94) + `TaskItem.jsx` (39) |
| Cómo actualiza la pantalla | Manipula el DOM: `getElementById`, `innerHTML`, `classList` (20 líneas de este tipo) | Describe la interfaz según el estado (`useState`) y React actualiza el DOM |
| Tras crear, editar o borrar | Vuelve a pedir toda la lista al servidor (`cargarTareas()`) | Actualiza el estado local con `map`, `filter` o el operador spread, sin otra petición |
| Reutilización | Las filas se arman con cadenas de texto HTML | Componentes con props: `TaskForm` y `TaskItem` |
| Seguridad al mostrar texto | Con `innerHTML` hay que escapar a mano (`escapeHtml`) | JSX escapa el texto por defecto |
| Verificación de errores HTTP | `toggleCompletada` y `eliminarTarea` solo atrapan fallos de red, no revisan `res.ok` | Todas las operaciones revisan `res.ok` y muestran el error |
| Dependencias | Ninguna instalada (Bootstrap por CDN) | Node, Vite, React y Bootstrap por npm |

Una observación: React no resultó más corto (295 líneas frente a 250), pero el código está dividido en piezas con una sola responsabilidad, lo que facilita mantenerlo y probarlo.

## 4. Conclusiones

1. El contrato HTTP/JSON permitió construir dos clientes totalmente distintos sin modificar el backend.
2. En Vanilla el programador es responsable de mantener sincronizados datos y pantalla; en React la interfaz es una función del estado (`UI = f(state)`).
3. Vanilla es suficiente para prototipos y páginas simples; React compensa su configuración inicial cuando la aplicación crece y se necesitan componentes reutilizables.
4. Validaciones, spinner de carga, `confirm` antes de borrar y mensajes de error mejoran la experiencia en ambos clientes.

## 5. Mejoras realizadas al código de la guía

- Se corrigió el enlace de `styles.css` en el Cliente 1.
- En React se eliminaron archivos sin uso de la plantilla de Vite.
- Se resolvieron dos errores de ESLint (`react-hooks`): el formulario se reinicia mediante `key` en lugar de copiar datos dentro de un efecto, y la carga inicial usa una función auxiliar `pedirTareas()`.