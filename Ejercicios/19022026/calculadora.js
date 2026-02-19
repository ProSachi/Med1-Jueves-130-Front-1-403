
let impuesto = 0.19 //19%
let cantidadProductos = parseInt(prompt("Cuantos productos?"));
let valorProductos = parseFloat(prompt("Valor de los productos"));

console.log(typeof(cantidadProductos));
console.log(typeof(valorProductos));

console.log(cantidadProductos);
console.log(valorProductos);

console.log( `El subtotal de la compra, antes de impuestos, es: ${(cantidadProductos * valorProductos)}`);

console.log( `El subtotal de la compra es: ${((cantidadProductos * valorProductos)*(impuesto+1))}`);