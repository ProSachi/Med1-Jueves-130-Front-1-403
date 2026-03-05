const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b === 0) {
        console.log("b no puede ser cero");
        return 0;
    }
    return a / b
}

export {sumar, restar, multiplicar, dividir}
