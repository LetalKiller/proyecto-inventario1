#  Manual de Usuario

##  Descripción General
Este sistema es una **aplicación web de gestión de inventario** desarrollada con **Angular** (frontend), **Node.js + Express** (backend) y **PostgreSQL** (base de datos). Permite a los usuarios gestionar productos a través de operaciones de registro, visualización, edición y eliminación.

---

##  Acceso al Sistema

###  Inicio de Sesión (Login)
1. Haz clic en **"Log In"** para acceder al sistema.
2. Ingresa tu **nombre de usuario** y **contraseña**.
3. Solo los **usuarios registrados** pueden acceder.
4. En caso de no estar registrado, en la misma pantalla puedes registrarte.

---

##  Navegación del Sistema

Una vez dentro, verás el **Menú Principal** con las siguientes secciones:

###  Sobre Nosotros
Información sobre el propósito del sistema y el equipo de desarrollo.

###  Contáctanos
Formulario o sección con datos de contacto.

###  Productos
Este es el módulo principal. Aquí puedes realizar las siguientes acciones:

- **Ver Productos:** Lista de todos los productos en el inventario.
- **Registrar Producto:** Llenar un formulario con nombre, descripción, precio y stock.
- **Editar Producto:** Seleccionar un producto y actualizar su información.
- **Eliminar Producto:** Quitar productos que ya no están disponibles.

---

##  Funcionalidades Técnicas

| Funcionalidad        | Descripción                                                  |
|----------------------|--------------------------------------------------------------|
| Ver productos        | Consulta todos los productos del inventario.                |
| Registrar producto   | Agrega un nuevo producto a la base de datos.                |
| Editar producto      | Permite actualizar nombre, descripción, precio o stock.     |
| Eliminar producto    | Elimina el producto seleccionado.                           |
| Autenticación        | Controla el acceso con login seguro.                        |

---

##  Requisitos del Sistema

###  Cliente (Usuario)
- Navegador moderno (Chrome, Firefox, Edge)
- Conexión a internet

###  Servidor (Desarrollo/Producción)
- Node.js 18+
- PostgreSQL 13+
- Angular CLI 16+
- npm

---

##  Instalación y Ejecución (modo desarrollador)

### 1. Clonar el repositorio
```bash
git clone https://github.com/LetalKiller/proyecto-inventario1.git
```
Ir a la rama `master`.

### 2. Instalar dependencias del backend
```bash
cd backend
npm install
```

### 3. Configurar base de datos PostgreSQL
- Crear una base de datos.
- Ejecutar las tablas (`usuarios`, `productos`).
- Configurar archivo `.env` con las credenciales correspondientes.

### 4. Instalar dependencias del frontend
```bash
cd frontend
npm install
```

### 5. Iniciar backend
```bash
npm start
```
Tener en para que el proyecto funcione sin ningun problema hay que cambiar la ip dependiendo del host en la siguiente ruta : 
```bash
\proyecto-inventario1\src\app\services\usuarios.service.ts
```


### 6. Iniciar frontend
```bash
ng serve
```