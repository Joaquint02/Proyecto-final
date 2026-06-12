# Sistema de Gestión de Productos

Proyecto  para la administración de un catálogo de productos mediante un panel privado de gestión.

El sistema permite registrar usuarios, iniciar sesión con autenticación JWT y administrar productos mediante operaciones CRUD.

---

# Tecnologías utilizadas

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- Node.js
- Express
- Sequelize

## Base de datos

- MySQL

## Seguridad

- JWT
- bcryptjs

---

# Funcionalidades

## Usuarios

✅ Registro de usuarios  
✅ Inicio de sesión  
✅ Autenticación mediante JWT  
✅ Protección de rutas privadas  


## Productos

✅ Crear productos  
✅ Listar productos  
✅ Editar productos  
✅ Eliminar productos  
✅ Visualizar información de productos  


## Panel Administrativo

✅ Dashboard de estadísticas  
✅ Gestión de inventario  
✅ Diseño responsive  

---

# Estructura del proyecto

```
Proyecto-final

├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│
└── README.md
```

---

# Instalación

## Clonar repositorio

```bash
git clone https://github.com/Joaquint02/Proyecto-final.git
```

---

# Backend

Ingresar:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env`

Ejemplo:

```env
DB_NAME=product_admin
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost

JWT_SECRET=secreto
```

Ejecutar:

```bash
npm start
```

Servidor:

```
http://localhost:3000
```

---

# Frontend

Ingresar:

```bash
cd frontend
```

Instalar:

```bash
npm install
```

Ejecutar:

```bash
npm run dev
```

---

# Base de datos

El proyecto utiliza:

- MySQL
- Sequelize ORM

Las tablas se crean automáticamente mediante Sequelize.

---

# API Principal

## Productos

GET

```
/api/products
```

POST

```
/api/products
```

PUT

```
/api/products/:id
```

DELETE

```
/api/products/:id
```

---

## Autenticación

Registro:

```
POST /api/auth/register
```

Login:

```
POST /api/auth/login
```

---

# Control de versiones

El proyecto utiliza:

- Git
- GitHub

Con historial de commits y seguimiento del desarrollo.

---

# Organización del proyecto

El desarrollo fue organizado utilizando:

- Trello para planificación de tareas
- GitHub para control de versiones

---

# Autor

Joaquín Trías

Proyecto Final Full Stack