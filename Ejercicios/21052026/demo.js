// Función proveedora (Retorna Promesa)
function verificarInventario(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(item === "Laptop") resolve("Hay 5 Laptops en stock");
            else reject("Producto agotado");
        }, 0);
    });
}

// El Ayer (Promesas con .then)
function comprarAyer() {
    verificarInventario("Laptop")
        .then(mensaje => console.log(mensaje))
        .catch(error => console.error(error));
}


// El Hoy (Async/Await)
const comprarHoy = async () => {
    try {
        // La lectura es lineal, de arriba hacia abajo
        const mensaje = await verificarInventario("Laptop");
        console.log("Éxito:", mensaje);
    } catch (error) {
        console.error("Fallo:", error);
    }
};

console.log("Antes de lo asincrono");
comprarHoy();
console.log("Despues de lo asincrono");