/* console.log('Pedido 1: Tomado');
setTimeout(function() {
  console.log('Pedido 2: Plato complejo listo');
}, 0);
console.log('Pedido 3: Limonada servida'); */

/* console.log("1. Usuario hace clic en 'Descargar'.");

// Simulamos una descarga que toma 3 segundos
setTimeout(() => {
    // Esto entra a la Cola de Tareas
    console.log("3. [ASÍNCRONO] Descarga del archivo completada.");
}, 3000);

console.log("2. El usuario sigue haciendo scroll en la página.");
 */
// Output real:
// 1. Usuario hace clic en 'Descargar'.
// 2. El usuario sigue haciendo scroll en la página.
// (Pasan 3 segundos de silencio)
// 3. [ASÍNCRONO] Descarga del archivo completada.

const visorReloj = document.querySelector('#reloj');
const btnDetener = document.querySelector('#btn-detener');
const btnContinuar = document.querySelector('#btn-continuar');
let segundos = 0;
let miIntervalo;

// Función reutilizable para iniciar el reloj
function iniciarReloj() {
    // Limpiamos cualquier intervalo previo para evitar duplicados
    clearInterval(miIntervalo);
    // Creamos el intervalo
    miIntervalo = setInterval(() => {
        segundos++;
        visorReloj.textContent = segundos;
    }, 1000);
}

// Siempre inicia cuando la página se actualiza
iniciarReloj();

btnDetener.addEventListener('click', () => {
    // Entregamos el ticket para destruir el ciclo asíncrono
    clearInterval(miIntervalo);
    console.log("Reloj detenido.");
});

btnContinuar.addEventListener('click', () => {
    iniciarReloj();
    console.log("Reloj continuado.");
});



