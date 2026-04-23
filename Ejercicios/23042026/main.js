/* import data from "./datos.js";
import usuariosRegistrados from "./usuariosRegistrados.js";

data.forEach(element => {
    console.log(element.name);
});


const name = document.querySelector("#inputName")
const user = document.querySelector("#inputUser")
const password = document.querySelector("#inputPass")
const boton = document.querySelector("#btnEnviar")

boton.addEventListener('click', () => {
    const nameCapturado = name.value.trim();
    const userCapturado = user.value.trim().toLowerCase();
    const passwordCapturado = password.value.trim();

    const esValido = usuariosRegistrados.some(item =>
        item.usuario === userCapturado && item.contraseña === passwordCapturado
    );

    if (esValido) {
        console.log("usuario Correcto");
    } else {
        console.log("Ingreso Incorrecto");
    }
}); */





/* miFormulario.addEventListener('submit', (e) => {
    e.preventDefault(); // OBLIGATORIO: Va en la primera línea.
    console.log("La página ya no se recargará.");
});
 */

const miFormulario = document.querySelector('#registro');
const inputCorreo = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');

miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Tubería para el correo (Múltiples métodos encadenados)
    // Entra: "   CoRReo@Empresa.com   " -> Sale: "correo@empresa.com"
    const correoLimpio = inputCorreo.value.trim().toLowerCase();

    // 2. Tubería para el teléfono (Saneamiento con Regex)
    const telefonoCrudo = inputTelefono.value;
    
    // La Regex /[^0-9]/g significa: "Busca todo lo que NO (^) sea un número del 0 al 9, 
    // en todo el texto (g), y reemplázalo por nada ('')".
    const telefonoSoloNumeros = telefonoCrudo.replace(/[^0-9]/g, '');

    console.log(`Correo: ${correoLimpio}`);
    console.log(`Teléfono limpio: ${telefonoSoloNumeros}`);
});





