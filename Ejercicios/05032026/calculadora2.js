import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

const numeros = () => parseInt(prompt("Dame un número"));

/*
let key = prompt(" ¿Que qurieres realizar?" + "\n" + "1. Sumar" + "\n" + "2. Restar" + "\n" + "3. Dividir" + "\n" + "4. Multiplicar");

switch (key) {
    case "1":
        console.log(sumar(numeros(), numeros()));
        break;
    case "2":
        console.log(restar(numeros(), numeros()));
        break;
    case "3":
        console.log(dividir(numeros(), numeros()));
        break;
    case "4":
        console.log(multiplicar(numeros(), numeros()));
        break;
    default:
        console.log("No sabes leer, opciones en numero del 1 a 4.");
        break;
}
 */

const miBotonsuma = document.getElementById("botonsuma");
const miBotonr = document.getElementById("botonr");
const miBotonm = document.getElementById("botonm");
const miBotond = document.getElementById("botond");

miBotonsuma.addEventListener("click", () => {
    console.log("Ejecutando un cálculo...");
    let resultado = sumar(numeros(), numeros());
    console.log(resultado);
    return resultado;
});
miBotonr.addEventListener("click", () => {
    console.log("Ejecutando un cálculo...");
    let resultado = restar(numeros(), numeros());
    console.log(resultado);
    return resultado;
});
miBotonm.addEventListener("click", () => {
    console.log("Ejecutando un cálculo...");
    let resultado = multiplicar(numeros(), numeros());
    console.log(resultado);
    return resultado;
});
miBotond.addEventListener("click", () => {
    console.log("Ejecutando un cálculo...");
    let resultado = dividir(numeros(), numeros());
    console.log(resultado);
    return resultado;
});
