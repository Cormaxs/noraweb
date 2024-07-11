// producto.js
import { productos } from './productos.js'; // Asume que productos.js está en la misma carpeta

// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Decodificar y extraer información
const nombre = decodeURIComponent(urlParams.get("name"));



lista.array.forEach(element => {
    console.log(element.nombre);
});


