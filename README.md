# Sistema de Soporte al Cliente


Este proyecto es una aplicación construida con Node.js y TypeScript utilizando el patrón de diseño Modelo-Vista-Controlador (MVC). Proporciona funcionalidades para gestionar solicitudes de soporte al cliente, permitiendo agregar, listar y actualizar el estado de las solicitudes.


## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

```bash
src/
    ├── controllers/
    │   └── request.controller.ts    # Lógica de negocio y manejo de solicitudes
    ├── models/
    │   └── request.model.ts         # Manipulación de datos (JSON como base de datos)
    ├── public/
    │   ├── css/
    │   │   └── globals.styles.css   # Estilos globales
    ├── router/
    │   └── request.routes.ts        # Definición de rutas de la aplicación
    ├── views/
    │   ├── layout.pug               # Plantilla base
    │   ├── view-requests.pug        # Vista para listar solicitudes
    │   └── add-request.pug          # Vista para agregar solicitudes
    ├── data/
    │   └── database.json            # Archivo que actúa como base de datos
    ├── index.ts                     # Configuración del servidor y aplicación
    └── tsconfig.json                # Configuración de TypeScript
```

## Descripción del Patrón MVC

El proyecto sigue el patrón Modelo-Vista-Controlador (MVC), que separa las responsabilidades en tres capas principales:
1. **Modelo (Model)**:
   - Gestiona la lógica de datos del sistema. En este proyecto, los datos se almacenan en un archivo JSON (database.json).
   - Archivo relevante: `src/models/request.model.ts`.

2. **Vista (View)**:
   - Maneja la presentación de datos al usuario mediante plantillas Pug.
   - Incluye la plantilla base (`layout.pug`) y vistas específicas para agregar y listar solicitudes.
   - Archivos relevantes:
     - `src/views/layout.pug`
     - `src/views/view-requests.pug`
     - `src/views/add-request.pug`

3. **Controlador (Controller)**:
   - Contiene la lógica de la aplicación, interactúa con los modelos y devuelve vistas al usuario.
   - Archivo relevante: `src/controllers/request.controller.ts`.


   Configuración del Proyecto

## Requisitos Previos

- **Node.js**: Versión 16 o superior.
- **TypeScript**: Instalado globalmente.
- **Dependencias**: Asegúrate de tenerlas instaladas con `npm install`.

## Instalación

1. **Clona este repositorio**:

   ```bash
   git clone <repositorio-url>
   cd <directorio-del-proyecto>
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Genera los estilos de Tailwind**:

   ```bash
   npm run dev:css
   ```

4. **Compila el proyecto TypeScript (si es necesario)**:

   ```bash
   npm run build
   ```

## Ejecución del Proyecto

### Modo Desarrollo

- Inicia el servidor en modo desarrollo con recarga automática:

  ```bash
  npm run dev
  ```

- Compila y ejecuta el servidor:

  ```bash
  npm run build
  npm start
  ```

## Funcionalidades Principales

1. **Agregar Solicitudes**:
   - **Vista**: `add-request.pug`.
   - Formulario para enviar solicitudes.
   - Las solicitudes se guardan en `database.json`.

2. **Listar Solicitudes**:
   - **Vista**: `view-requests.pug`.
   - Muestra una lista de todas las solicitudes almacenadas.
   - Permite filtrar solicitudes por cualquier campo.

3. **Actualizar Estado**:
   - En el listado, cada solicitud tiene un menú desplegable para cambiar el estado:
     - Pendiente
     - En Proceso
     - Resuelta

4. **Diseño Responsivo**:
   - Se utiliza Tailwind CSS para estilos limpios y adaptables.

## Rutas del Proyecto

### Rutas GET

- `/requests`: Muestra el listado de solicitudes con opciones de búsqueda y actualización de estado.
- `/add`: Muestra el formulario para agregar nuevas solicitudes.

### Rutas POST

- `/requests/:id/status`: Actualiza el estado de una solicitud específica.
- `/submit`: Guarda una nueva solicitud en el archivo JSON.

## Tecnologías Utilizadas

- **Backend**: Node.js, TypeScript, Express
- **Frontend**: Pug (plantillas HTML)
- **Estilos**: Tailwind CSS
- **Almacenamiento**: JSON como base de datos
- **Herramientas Adicionales**:
  - Nodemon para desarrollo
  - Connect-flash para mensajes flash
  - Express-session para gestión de sesiones
