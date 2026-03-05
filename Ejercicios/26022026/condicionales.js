let edad3 = 20;
let edad2 = undefined;
console.log(edad2);

if (edad3 > 18 && edad2 > 18) {
    console.log("Mayor de edad");
} else if (edad3 > 18) {
    console.log("Menor de edad");
} else {

}

let key = parseInt(prompt("Ingresa la opción de interes"))
switch (key) {
    case 1:
        console.log("Caso 1");
        break;
    case 2:
        console.log("Caso 2");
        break;
    case 3:
        console.log("Caso 3");
        break;
    default:
        break;
}


let edad = 20;

// Forma if...else (Verborrágica)
let mensaje;
if (edad >= 18) {
  mensaje = "Es mayor de edad";
} else {
  mensaje = "Es menor de edad";
}
console.log(mensaje);

// Forma Ternaria (Concisa y Moderna)
const mensajeTernario = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
//                      (condición)  ?   (valor si true)  :   (valor si false)

console.log(mensajeTernario);
