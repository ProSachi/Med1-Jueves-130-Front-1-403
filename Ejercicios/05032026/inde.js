function inde() {

const impuestoEstablecido = 0.1;

let salario = parseFloat(prompt("Ingresa tu salario"))
const calcularImpuesto = (salarioBruto) => salarioBruto * impuestoEstablecido;

const calcularSalarioNeto = (salarioBruto) => {
    let impuesto = calcularImpuesto(salarioBruto)
    console.log(`El impuesto a pagar es ${impuesto}`);
    return salarioBruto - impuesto
}
console.log(`El salsario menos impuesto será ${calcularSalarioNeto(salario)}`);

const miBoton = document.getElementById("botonImpuesto");

miBoton.addEventListener("click", (salarioBruto) => {
    let impuesto = calcularImpuesto(salarioBruto)
    console.log(`El impuesto a pagar es ${impuesto}`);
    return salarioBruto - impuesto
});

}

inde();