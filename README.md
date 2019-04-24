# Webpack-Server

[**Español**](#Spanish) | [**License**](#License)

---

## Development server (with webpack)

A simple development server for multi-page site in Html5, JS y CSS. Features:

- A separete folder configuration for `webpack` (production and development)

- It use *HtmlWebpackPlugin* plugin to define each page, title and *activate* class for the active item menu.

- Bootstrap source files. For an easy implementation, the compiled and minified files are used, called in `index.js` and you can change it.

- Some declarete rules (into config webpack):
  - Split code `js`
  - Separate CSS files
  - `Sass` y `Postcss`: autoprefixer y cssnano (minify)
  - Loader and optimize files images
  - Loader fonts files
  - `Handlebars` template

## Install

1) Install [Node.js](http://nodejs.org/)

2) Clone the *webpack-server* repository:

    ```sh
      git clone https://github.com/Edurtu/webpack-server.git
    ```

3) Navigate to the *webpack-server* folder

    ```sh
      cd webpack-server
    ```

4) Install dependencies:

    ```sh
      npm install
    ```

## Considerations

- The entry files of our project, is inside `src` folder
- The production folder is `dist`, you can change it in *webpack.prod.js*. Erase and recreate the production folder, type:

  ```sh
    npm run build
  ```

- It integrate a simple web server and ability to use live reloading with `webpack-dev-server` module, in *webpack.dev.js* you can change the configurable options. Run the development server typing:

  ```sh
    npm start
  ```

---

> ### `Spanish`

## Servidor para desarrollo (con Webpack)

Servidor de desarrollo para sitio web multi-página en Html5, JS y CSS. Características:

- Carpeta de configuración separada en `webpack` (producción y desarrollo).

- Uso del plugin HtmlWebpackPlugin para definir cada página, su título y activación de la opción del menú en la navegación

- Archivos fuente de Bootstrap. Para una implementación fácil se usan los ficheros complilados y minificados, estos son llamados en `index.js` donde puedes cambiarlo.

- Algunas reglas declaradas (config webpack):
  - División de módulos `js`
  - Extracción de css
  - `Sass` y `Postcss`: autoprefixer y cssnano (minificación)
  - Lector y optimización de imágenes
  - Lector de fuentes locales
  - Uso del sistema de plantillas `Handlebars`

## Instalación

1) Instala [Node.js](http://nodejs.org/)
2) Clona el repositorio *webpack-server*:

    ```sh
      git clone https://github.com/Edurtu/webpack-server.git
    ```

3) Entra en la carpeta *webpack-server*

    ```sh
      cd webpack-server
    ```

4) Instala las dependencias:

    ```sh
      npm install
    ```

## Consideraciones

- Estructura del proyecto en la carpeta `src`
- Carpeta de producción 'generada' `dist`, configuración en *webpack.prod.js*

  ```sh
    npm run build
  ```

- Servidor de desarrollo `webpack-dev-server`, configuración en *webpack.dev.js*

  ```sh
    npm start
  ```

---

> ### `License`

License MIT <https://opensource.org/licenses/mit-license.php>