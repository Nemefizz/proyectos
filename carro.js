
function agregarAlCarrito() {
    // ...
    
    // Crear una nueva fila en la tabla
    let nuevaFila = document.createElement("tr");
    
    // Agregar una celda de imagen a la fila
    let celdaImagen = document.createElement("td");
    let imagen = document.createElement("img");
    imagen.src = "img/bano.png"; // Asignar la URL de la imagen correspondiente
    imagen.alt = "BAño";
    celdaImagen.appendChild(imagen);
    nuevaFila.appendChild(celdaImagen);
    
    // Agregar las celdas de producto, cantidad y precio a la fila
    let celdaProducto = document.createElement("td");
    let celdaCantidad = document.createElement("td");
    let celdaPrecio = document.createElement("td");
    // ...
    
    // Agregar la nueva fila a la tabla
    let tabla = document.getElementById("tabla-carrito");
    tabla.appendChild(nuevaFila);
    
    // Actualizar el total de productos y el total a pagar
    // ...
  }
  
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito() {
    // ...
  }
