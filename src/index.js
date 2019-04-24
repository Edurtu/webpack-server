/**
 * Import plugins
 */
//-- Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


/**
 * Imports project files
 */
 //-- Custom styles
import './styles/style.css';
//-- Import all images
const images = importAll(require.context('./files/images/', false, /\.(png|jpe?g|svg)$/));


/** 
 * Functions
*/
//-- Import all use 'require.context' from webpack
function importAll(r) {
  return r.keys().map(r);
};