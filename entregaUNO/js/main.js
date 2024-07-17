function ingresarNumero(mensaje) {
    let valor;
    do {
      valor = Number(prompt(mensaje));
    } while (isNaN(valor) || valor <= 0);
    return valor;
  }
  
  function solicitarNombreProducto() {
    return prompt("Ingrese el nombre del producto:");
  }

  function solicitarCantidadProducto() {
    return ingresarNumero("Ingrese la cantidad del producto:");
  }
 
  function solicitarPrecioProducto() {
    return ingresarNumero("Ingrese el precio del producto:");
  }
  
  // Función para ingresar un producto //
  function ingresarProducto() {
    const nombre = solicitarNombreProducto();
    const cantidad = solicitarCantidadProducto();
    const precio = solicitarPrecioProducto();
    return { nombre, cantidad, precio };
  }
  
  // Función para mostrar el resumen de la compra //
  function mostrarResumen(totalProductos, totalCompra, resumen) {
    console.log("Resumen de la compra:");
    console.log(resumen);
    console.log("Total de productos: " + totalProductos);
    console.log("Total de la compra: $" + totalCompra);
  }
  
  function simularEcommerce() {
    let totalProductos = 0;
    let totalCompra = 0;
    let resumen = "";
    let continuar = true;
  
    while (continuar) {
      const producto = ingresarProducto();
      const subtotal = producto.cantidad * producto.precio;
      totalProductos = totalProductos + producto.cantidad;
      totalCompra = totalCompra + subtotal;
      resumen = resumen + "Producto: " + producto.nombre + ", Cantidad: " + producto.cantidad + ", Precio: $" + producto.precio + ", Subtotal: $" + subtotal + "\n";
  
      continuar = confirm("¿Desea agregar otro producto?");
    }
  
    mostrarResumen(totalProductos, totalCompra, resumen);
  }
  
  simularEcommerce();