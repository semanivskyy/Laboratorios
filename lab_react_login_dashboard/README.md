# Login y Dashboards por rol — Laboratorio React + Vite

Aplicación de inicio de sesión con datos simulados (`src/data/users.js`). Según el rol del usuario se muestra un dashboard distinto:

- **admin** → `AdminDashboard`
- **user** → `UserDashboard`

## Cómo ejecutarlo

    npm install
    npm run dev

Se abre en `http://localhost:5173`.

## Usuarios de prueba

| Rol | Correo | Contraseña |
|---|---|---|
| admin | `admin@escuela.edu` | `admin123` |
| user | `luis@escuela.edu` | `user123` |
| user | `maria@escuela.edu` | `user123` |
| user | `carlos@escuela.edu` | `user123` |

## Estructura

    src/
    ├── components/
    │   ├── common/      Card, Button, InputField
    │   ├── layout/      DashboardLayout, Navbar, Sidebar
    │   └── dashboard/   DataTable, ProgressBar, StatCard
    ├── data/users.js    Usuarios y cursos simulados
    ├── pages/           LoginPage, AdminDashboard, UserDashboard
    └── App.jsx          Decide qué pantalla mostrar según el usuario

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación para producción |
| `npm run preview` | Vista previa de la compilación |
| `npm run lint` | Revisión con ESLint |

> Las credenciales están en el código solo con fines didácticos; en un proyecto real la autenticación se haría en un backend.