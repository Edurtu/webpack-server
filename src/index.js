// imports 

// imports files
import './styles/style.css';

/** 
 * Import all use 'require.context' from webpack
*/
function importAll(r) {
  return r.keys().map(r);
}
// Import all images
const images = importAll(require.context('./files/images/', false, /\.(png|jpe?g|svg)$/));
