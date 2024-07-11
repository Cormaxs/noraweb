

const botonesAgregar = document.querySelectorAll(".añadirCarrito"); // Seleccionar todos los botones "Añadir al carrito"
let carrito = [];
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = obtenerProductoDelDOM(boton); // Obtener información del producto del DOM
 
    carrito.push(producto);
   console.log(carrito);
    
  });
});

function obtenerProductoDelDOM(boton) {
  const contenedorProducto = boton.parentNode; // Contenedor del producto
  const nombre = contenedorProducto.querySelector(".nombreH2").textContent; // Obtener nombre del producto
  const precioActual = contenedorProducto.querySelector(".Precioactual").textContent; // Obtener precio actual
  const imagen = contenedorProducto.querySelector(".imgContentIMG").src; // Obtener URL de la imagen

  return {
    nombre,
    precioActual,
    imagen
  };
}

