const productos = [{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/1.webp",
  precioAnterior: 55231.1,
  precioActual: 3900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/2.webp",
  precioAnterior: 1000000,
  precioActual: 50000,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/3.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/4.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/5.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/5.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/6.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/7.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/8.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
},
{
  nombre: "Mouse Logitech G Series G203 negro Gamer LIGHTSYNC",
  imagen: "image/9.webp",
  precioAnterior: 36400,
  precioActual: 32900,
  ahorro: 0, // We'll calculate this dynamically
  stock: 10
}
// ... other products
];

const productosContainer = document.querySelector(".containerProductos"); // Target the container ul

function generarProductos() {
  const productosList = document.createElement("ul");
  productosList.classList.add("productosLista");

  productos.forEach((producto) => {
    const productoItem = document.createElement("li");
    productoItem.classList.add("productoUnico");

    // Check stock availability before creating product element
    if (producto.stock > 0) {
      const enlaceProducto = document.createElement("a");
      
      const imgContent = document.createElement("div");
      imgContent.classList.add("imgContent");

      const preciosUnicosSpan = document.createElement("span");
      preciosUnicosSpan.classList.add("preciosUnicos");
      preciosUnicosSpan.textContent = "¡Precios únicos!";

      const img = document.createElement("img");
      img.classList.add("imgContentIMG");
      img.src = producto.imagen;
      img.alt = producto.nombre;

      // Calculate ahorro dynamically based on precioAnterior and precioActual
      const ahorro = ((producto.precioAnterior - producto.precioActual) / producto.precioAnterior * 100).toFixed(2);
      const ahorroSpan = document.createElement("span");
      ahorroSpan.classList.add("ahorro");
      ahorroSpan.textContent = `AHORRAS UN ${ahorro}%`;

      const productoFavoritoSpan = document.createElement("span");
      productoFavoritoSpan.classList.add("productoFavorito");
      productoFavoritoSpan.textContent = "Producto favorito";

      imgContent.appendChild(preciosUnicosSpan);
      imgContent.appendChild(img);
      imgContent.appendChild(ahorroSpan);
      imgContent.appendChild(productoFavoritoSpan);

      const nombreH2 = document.createElement("h2");
      nombreH2.classList.add("nombreH2");
      nombreH2.textContent = producto.nombre;

      const preciosDiv = document.createElement("div");
      preciosDiv.classList.add("precios");

      const precioRebajaP = document.createElement("p");
      precioRebajaP.classList.add("Preciorebaja");

      // Use Intl.NumberFormat for locale-aware formatting
      const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'  // Adjust for your currency
      });

      precioRebajaP.textContent = formatter.format(producto.precioAnterior);

      const precioActualP = document.createElement("p");
      precioActualP.classList.add("Precioactual");
      precioActualP.textContent = formatter.format(producto.precioActual);
    

      preciosDiv.appendChild(precioRebajaP);
      preciosDiv.appendChild(precioActualP);

      const ahorrasP = document.createElement("p");
      ahorrasP.classList.add("ahorras");
      ahorrasP.innerHTML = `ahorras: <span>${formatter.format(producto.precioAnterior - producto.precioActual)}</span>`;

      enlaceProducto.appendChild(imgContent);
      enlaceProducto.appendChild(nombreH2);
      enlaceProducto.appendChild(preciosDiv);
      enlaceProducto.appendChild(ahorrasP);
      enlaceProducto.href = `producto/producto.html?name=${nombreH2.innerText}&image=${img.src}&priceant=${precioRebajaP.textContent}&priceact${precioActualP.textContent}&ahorro=${ahorrasP.innerText}`;///--------------------------------------------------------------------------------------
    
      const añadirCarritoButton = document.createElement("button");
      añadirCarritoButton.classList.add("añadirCarrito");
      añadirCarritoButton.textContent = "Añadir al carrito";

      productoItem.appendChild(enlaceProducto);
      productoItem.appendChild(añadirCarritoButton);

      productosList.appendChild(productoItem);
    }
  });

  productosContainer.appendChild(productosList);
}

generarProductos();
