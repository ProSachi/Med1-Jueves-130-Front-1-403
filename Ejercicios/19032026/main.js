/* 

let numeros = [2, "2", "dos"]

console.log(numeros[2]);

numeros[2] = "tres" 

console.log(numeros.length);

numeros.push("cuatro");

console.log(numeros[3]);

let eliminado = numeros.pop();

console.log(eliminado); */

/* 
let frutas = ['manzana', 'banana'];

console.log(frutas); 

frutas.push("uva")

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element);
} */

/* for (const element of frutas) {
    console.log(element);
}
 */

/* let palabra = "Palabra"

frutas.forEach((x, y) => {
    console.log(y, x);
});

let contador = 0;
for (const element of palabra) {
    console.log(element);
    contador = contador + 1;
} 
console.log(contador);
 */
/* const numeros = [1, 2, 3];
let frutas = [1, 'banana'];

 const dobles = frutas.map(numero => numero * 2); 

frutas.forEach((x) => {
    console.log(x);
});
console.log("Nuevo Arrelgo \n");
dobles.forEach((t) => {
    console.log(t);
}); */

/* const numeros = [1, 2, 3, 4, 5, 6]
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

const diccionario = ["perro", "Gato", "Vaca", "Oveja"]

const letras = diccionario.map(palabra => {
    let tamano = Math.round((palabra.length)/2)
        console.log(tamano);
    for (let index = 0; index < palabra.length; index++) {
        if (index===tamano) {
            return palabra[index];
        }
    }
});

console.log(letras); */


const carrito = [10, 25, 15, 50];

const total = carrito.reduce(function(sumaTotal, precioActual) {
    return sumaTotal + precioActual;
}, 0); 

console.log(total);
