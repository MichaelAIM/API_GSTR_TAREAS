# API_GSTR_TAREAS

Este proyecto es una API para la gestión de tareas, utilizando **Node.js**, **Express**, **Sequelize** y **SQLite**. También incorpora **Socket.IO** para actualizaciones en tiempo real.

## Características

- CRUD completo de tareas:
  - **C**reate: Crear nuevas tareas
  - **R**ead: Consultar tareas existentes
  - **U**pdate: Actualizar estado de tareas
  - **D**elete: Eliminar tareas
- Base de datos **SQLite** para almacenamiento persistente
- **Sequelize ORM** para gestión eficiente de modelos
- **WebSockets** con Socket.IO para actualizaciones en tiempo real
- Sistema de autenticación y autorización
- Validación de datos
- Manejo de errores centralizado

## Tecnologías Utilizadas

- Node.js v16 o superior
- Express.js para el servidor REST
- Sequelize como ORM
- SQLite como base de datos
- Socket.IO para comunicación en tiempo real
- TypeScript para tipado estático

## Instalación

### Prerrequisitos

```bash
# Asegúrate de tener Node.js instalado
node --version
npm --version
```

### Pasos de Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/MichaelAIM/API_GSTR_TAREAS.git
cd API_GSTR_TAREAS
```

2. Instalar dependencias

```bash
npm install
```

3. Configurar variables de entorno

```bash
cp .env.example .env
# Edita el archivo .env con tus configuraciones
```

4. Compilar TypeScript

```bash
tsc
```

## Ejecución

### Desarrollo

```bash
nodemon dist/app
```

### Producción

```bash
node dist/app
```

## Endpoints API

### Tareas

- `GET /api/task` - Obtener todas las tareas
- `POST /api/task` - Crear nueva tarea
- `PUT /api/task/:id` - Actualizar tarea
- `DELETE /api/task/:id` - Eliminar tarea

## Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Autores

- **Michael AIM** - _Trabajo Inicial_ - [MichaelAIM](https://github.com/MichaelAIM)
