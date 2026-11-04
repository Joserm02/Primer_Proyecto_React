# Proyecto React – Aplicación de Registro e Inicio de Sesión

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación web utilizando React y JavaScript. Su objetivo es permitir el registro de usuarios, el inicio de sesión y la visualización de los datos personales en una pantalla principal.

Se trata de un proyecto realizado para poner en práctica los conocimientos adquiridos sobre desarrollo frontend y creación de interfaces interactivas.

## Tecnologías utilizadas

- **React:** desarrollo de la interfaz mediante componentes.
- **JavaScript:** programación de las funcionalidades.
- **Material UI:** utilización de componentes para los formularios y botones.
- **CSS:** diseño y personalización de la aplicación.
- **Git y GitHub:** control de versiones y almacenamiento del código.
- **Render:** publicación de la aplicación web.

## Funcionalidades principales

### 1. Inicio de sesión
- Acceso mediante nombre de usuario y contraseña.
- Comprobación de los datos introducidos.
- Acceso a la pantalla principal cuando los datos son correctos.

### 2. Registro de usuarios
- Introducción del nombre y contraseña.
- Repetición de la contraseña para comprobar que coincide.
- Selección de edad y género.
- Selección de una provincia de Andalucía.
- Posibilidad de añadir una foto de perfil.
- Validación de los campos del formulario.

### 3. Pantalla Home
- Mensaje de bienvenida personalizado.
- Visualización de la foto de perfil.
- Presentación de los datos del usuario registrado.
- Opción para volver a la pantalla de inicio de sesión.

## Estructura del proyecto

```text
Proyecto-React/
│
├── src/
│   ├── components/
│   │   └── BotonGeneral.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── RegisterPage.jsx
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

## Instalación y ejecución

Para ejecutar el proyecto en local:

1. Clonar el repositorio:

```bash
git clone https://github.com/Joserm02/Primer_Proyecto_React.git
```

2. Entrar en la carpeta del proyecto:

```bash
cd Primer_Proyecto_React
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar la aplicación:

```bash
npm run dev
```

## Publicación

La aplicación está publicada mediante Render y el código fuente se encuentra alojado en GitHub.

- **Aplicación web:** [Ver proyecto en Render](https://proyecto-react-30yz.onrender.com)
- **Repositorio:** [Ver código en GitHub](https://github.com/Joserm02/Primer_Proyecto_React)

## Aprendizajes

Durante el desarrollo de este proyecto he trabajado con:

- Creación y reutilización de componentes en React.
- Uso de estados mediante `useState`.
- Comunicación entre componentes mediante `props`.
- Gestión de eventos y formularios.
- Validación de datos introducidos por el usuario.
- Selección y visualización de imágenes.
- Uso de `useEffect` para gestionar la carga y limpieza de recursos.
- Publicación de aplicaciones mediante GitHub y Render.

## Autor

Proyecto desarrollado como práctica de aprendizaje de React y desarrollo web frontend.
