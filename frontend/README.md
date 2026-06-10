# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Sistema de Gestión de Productos

Aplicación Full Stack desarrollada para la administración de productos mediante un panel privado.

## Tecnologías Utilizadas

### Frontend
- React
- Vite
- Axios
- React Toastify

### Backend
- Node.js
- Express

### Base de Datos
- MySQL
- Sequelize

### Autenticación
- JWT (JSON Web Token)
- bcryptjs

---

## Funcionalidades

### Usuarios
- Registro de usuarios
- Inicio de sesión
- Autenticación mediante JWT
- Protección de rutas privadas
- Cierre de sesión

### Productos
- Crear productos
- Listar productos
- Editar productos
- Eliminar productos
- Ver detalle de productos
- Buscar productos

### Dashboard
- Estadísticas generales
- Cantidad total de productos
- Stock total
- Valor total del inventario

---

## Instalación

### Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## Backend

Ingresar a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear archivo .env

```env
DB_NAME=product_admin
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost

JWT_SECRET=supersecreto
```

Ejecutar servidor:

```bash
npm start
```

---

## Frontend

Ingresar a la carpeta frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar aplicación:

```bash
npm run dev
```

---

## Estructura del Proyecto

backend/

- controllers
- middleware
- models
- routes
- config

frontend/

- components
- services
- App.jsx

---

## Autor

Joaquín Trías

Proyecto Final Full Stack
React + Express + MySQL + Sequelize + JWT