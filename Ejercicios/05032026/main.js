sumar();

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
    console.log("Yo no me ejecutare");
}

function sumar2(a, b) {
    return a + b;
}

function sumar3(a, b) {
    let resultado = 3 + 4;
    console.log(resultado);
}
function sumar4(a, b) {
    console.log(a + b);
}


sumar3(1, 2)

console.log(sumar(2, 4));

let resultado = sumar(2, 4);



// Funciones anonimas
let sumar5 = function (a, b) {
    return 5 + 5;
}

console.log(sumar5(2, 5));


const miBoton = document.getElementById("boton");
console.log(miBoton);
/* const clic = function () {
    console.log("¡Me hicieron clic!");
}
miBoton.addEventListener("click", clic);
 */
miBoton.addEventListener("click", sumar3);

/* function sumar(a, b) {
    let resultado = a + b;
    return resultado;
    console.log("Yo no me ejecutare");
} */
//Paso de una función regular a una función anónima
    const sumar6 = function (a, b) {
    let resultado = a + b;
    return resultado;
    console.log("Yo no me ejecutare");
}
//Quitar la palabra function y agregar la
    const sumar7 = (a, b) => a + b;


    function restar (a, b){
        let resta = a - b;
        return resta
    }  
