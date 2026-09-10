# Órbita Viajes 🌌🚀

## Descripción

**Órbita Viajes** es una página web temática de una **agencia de viajes interplanetarios**. El proyecto presenta diferentes destinos espaciales y permite al usuario consultar información, interactuar con la página y utilizar un formulario de contacto.

El proyecto fue desarrollado como trabajo colaborativo aplicando **HTML5, CSS, JavaScript y Git/GitHub**.

## Integrantes

- Daniela Medina Pizarro
- Juan Sebastian Flores
- Joan Alberto Erazo Zuñiga

## Repositorio

https://github.com/AnonymusAng/orbita-viajes

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** diseño visual, distribución, tarjetas, botones, efectos hover y adaptación a dispositivos móviles.
- **JavaScript:** interactividad de la página, mostrar/ocultar información y validaciones.
- **Git y GitHub:** control de versiones, ramas, commits e integración del trabajo.

## Estructura del proyecto

```text
orbita-viajes/
│
├── css/
│   ├── base.css
│   ├── contacto.css
│   ├── cotizador.css
│   └── destinos.css
│
├── img/
│   ├── europa.jpg
│   ├── Luna.jpg
│   ├── marte.jpg
│   ├── planetaficticio.jpg
│   ├── portada-espacial.png
│   └── logo-orbita.png
│
├── js/
│   ├── contactos.js
│   ├── cotizador.js
│   └── destinos.js
│
├── index.html
├── destinos.html
├── cotizador.html
└── contacto.html
```

> Los nombres de las imágenes pueden variar según la versión final integrada del repositorio.

## Páginas principales

### Inicio — `index.html`

Presenta la agencia **Órbita Viajes**, su temática espacial, una imagen principal y enlaces de navegación hacia las demás páginas.

También contiene el encabezado, menú de navegación, contenido principal y pie de página.

### Destinos — `destinos.html`

Presenta cuatro destinos:

- Luna
- Marte
- Europa
- Planeta ficticio

Cada destino se representa como una unidad de información con:

- Título
- Imagen
- Texto alternativo
- Descripción
- Duración
- Precio
- Lista de actividades
- Botón de interacción

### Cotizador — `cotizador.html`

Página destinada a la funcionalidad de cotización del proyecto.

### Contacto — `contacto.html`

Contiene un formulario de contacto con campos para:

- Nombre
- Correo electrónico
- Edad
- Asunto
- Destino de interés
- Mensaje
- Aceptación de condiciones

El formulario incluye validaciones y mensajes para informar al usuario si existe algún error o si el envío fue correcto.

## JavaScript

El proyecto utiliza JavaScript para agregar funcionalidades sencillas e interactivas.

### Destinos

`js/destinos.js` permite interactuar con los botones de detalles de los destinos.

La lógica principal:

1. Espera a que cargue el documento.
2. Busca los botones que tienen la clase `.btn-detalles`.
3. Recorre los botones encontrados.
4. Detecta el evento `click`.
5. Busca el `article` correspondiente.
6. Busca el elemento `.detalles`.
7. Agrega o quita la clase `oculto`.
8. Cambia el texto del botón entre **"ver detalles"** y **"ocultar detalles"**.

### Contacto

`js/contactos.js` controla el formulario y realiza validaciones antes de mostrar el mensaje de confirmación.

Entre las comprobaciones realizadas se encuentran:

- Campos obligatorios.
- Formato básico del correo.
- Edad mínima.
- Aceptación de las condiciones.

## CSS

### `css/base.css`

Contiene los estilos generales compartidos por el sitio:

- Fondo.
- Tipografía.
- Encabezado.
- Logo.
- Título.
- Navegación.
- Enlaces.
- Botones.
- Secciones.
- Pie de página.
- Diseño responsive.

### `css/destinos.css`

Contiene los estilos específicos de la página de destinos:

- Tarjetas de destinos.
- Imágenes.
- Bordes.
- Sombras.
- Botones.
- Efectos `hover`.
- Organización de las tarjetas.
- Adaptación para dispositivos móviles.
- Clase `.oculto` para ocultar información.

### `css/contacto.css`

Contiene los estilos específicos del formulario de contacto, incluyendo campos, etiquetas, botón, mensajes y distribución adaptable.

### `css/cotizador.css`

Contiene los estilos específicos de la página del cotizador.

## HTML semántico

Se utilizan elementos semánticos para organizar el contenido:

- `<header>`: encabezado.
- `<nav>`: navegación principal.
- `<main>`: contenido principal.
- `<section>`: agrupación de contenido.
- `<article>`: unidad independiente de información, como cada destino.
- `<footer>`: pie de página.

El uso de `<article>` en los destinos permite tratar cada destino como una tarjeta o unidad independiente de información.

## Diseño responsive

El proyecto incluye reglas `@media` para adaptar la interfaz a pantallas pequeñas.

En dispositivos móviles se realizan ajustes como:

- Reducción del tamaño del título.
- Organización vertical del menú.
- Ajuste del ancho del contenido.
- Reducción de espacios internos.
- Organización de las tarjetas en una sola columna cuando corresponde.

## Control de versiones con Git

El proyecto se desarrolló mediante ramas y commits.

La rama principal utilizada es:

```bash
main
```

La rama de trabajo de Daniela para la sección de destinos fue:

```bash
feature/daniela-destinos
```

### Flujo básico utilizado

```bash
git switch main
git pull origin main
git switch feature/daniela-destinos
```

Para revisar cambios:

```bash
git status
```

Para preparar archivos:

```bash
git add .
```

Para crear un commit:

```bash
git commit -m "Mensaje descriptivo"
```

Para subir la rama:

```bash
git push
```

La guía establece que los commits deben representar avances reales y utilizar mensajes descriptivos.

## Avances de la sección de Daniela

La guía asignó a Daniela la página de **Destinos**, junto con:

```text
destinos.html
css/destinos.css
js/destinos.js
```

y los recursos visuales correspondientes.

Los avances definidos fueron:

### 1. Estructura y contenido

Creación de la estructura de `destinos.html`, conexión de CSS y JavaScript, navegación y cuatro destinos.

Commit:

```text
Crear estructura y contenido de destinos
```

### 2. Diseño de tarjetas

Organización de los destinos como tarjetas y aplicación de colores, márgenes, imágenes, bordes, sombras, botones y efectos hover.

Commit:

```text
Diseñar tarjetas de destinos
```

### 3. Funcionalidad JavaScript

Implementación de los botones para mostrar y ocultar los detalles de cada destino.

Commit:

```text
Implementar interacción de destinos
```

### 4. Diseño adaptable y revisión

Ajustes para dispositivos móviles, revisión de textos, imágenes, enlaces y botones.

Commit:

```text
Ajustar destinos para dispositivos móviles
```

## Requisitos del proyecto

El proyecto fue planteado para cumplir con los requisitos mínimos de una página web funcional:

### HTML

- Encabezado.
- Menú de navegación.
- Sección principal.
- Mínimo tres secciones de contenido.
- Imágenes.
- Textos y títulos.
- Botones.
- Formularios o campos de entrada.
- Pie de página.
- Etiquetas semánticas.

### CSS

- Colores y tipografías.
- Distribución de elementos.
- Márgenes y espacios.
- Botones personalizados.
- Tarjetas o bloques.
- Efectos hover.
- Diseño adaptable.

### JavaScript

El proyecto incorpora funcionalidades de interacción, como:

- Mostrar u ocultar información.
- Validar formularios.
- Mostrar mensajes al usuario.
- Interacción mediante botones.

### Git

- Repositorio GitHub.
- Ramas de trabajo.
- Commits descriptivos.
- Integración del trabajo.
- Historial de cambios.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/AnonymusAng/orbita-viajes.git
```

2. Entrar a la carpeta:

```bash
cd orbita-viajes
```

3. Abrir el proyecto en Visual Studio Code.

4. Abrir `index.html` para iniciar la página.

5. Comprobar la navegación hacia:

```text
index.html
destinos.html
cotizador.html
contacto.html
```

## Objetivo académico

El proyecto busca demostrar la aplicación práctica de conocimientos de:

- Desarrollo de páginas web con HTML5.
- Diseño con CSS3.
- Interactividad básica con JavaScript.
- Trabajo colaborativo con Git y GitHub.
- Uso de ramas y commits.
- Capacidad para explicar y defender el código desarrollado.

## Estado

Proyecto desarrollado como parcial práctico de **Desarrollo Web y Control de Versiones con Git**.
