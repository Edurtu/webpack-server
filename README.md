# Webpack-Server

## Servidor para desarrollo (con Webpack)

Servidor de desarrollo para sitio web multipágina en Html5, JS y CSS. Características:

- Carpeta de configuración separada en `webpack` (producción y desarrollo).

- Uso del plugin HtmlWebpackPlugin para definir cada página, su título y activación de la opción del menú en la navegación

- Algunas reglas declaradas (config webpack):
  - División de módulos `js`
  - Extracción de css
  - `Sass` y `Postcss`: autoprefixer y cssnano (minificación)
  - Lector y optimización de imágenes
  - Lector de fuentes locales

## Consideraciones

- Estructura del proyecto en la carpeta `src`
- Carpeta de producción 'generada' `dist`, configuración *webpack.prod.js*

  ```sh
    npm run build
  ```

- Servidor de desarrollo `webpack-dev-server`, configuración *webpack.dev.js*

  ```sh
    npm start
  ```

---
Licencia MIT <https://opensource.org/licenses/mit-license.php>