/* function crearAlerta(mensaje, tipo) {

    const divZona = document.querySelector("#zona-notificaciones");
    const nombreAlerta = document.createElement("div");
    nombreAlerta.classList.add("alerta")

    if (tipo === "Exito") {
        nombreAlerta.classList.toggle("alerta-verde")
    } else if (tipo === "Error") {
        nombreAlerta.classList.toggle("alerta-roja")
    } else {
        console.log("Error 404");
    }
    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    nombreAlerta.appendChild(parrafo);
    divZona.appendChild(nombreAlerta)
}

crearAlerta('Registrado correctamente', 'Exito');
crearAlerta('Rechazado', 'Error'); */

const usuarioReal = "Santiago"
const contrasenaReal = "admin12345"

const bontonEnviar = document.querySelector('#enviar');
const inputName = document.querySelector('#name');
const inputPassword = document.querySelector('#password');

bontonEnviar.addEventListener('click', (e) => {
    const name = inputName.value.trim()
    const password = inputPassword.value.trim()
    e.preventDefault();

    if (name.toLowerCase() === usuarioReal.toLowerCase() && password === contrasenaReal) {
        console.log("Inicio de sesión exitosa");
    } else {
        console.log("Usuario o contraseña Incorrecta");
    }
});


const tarjeta = document.querySelector('#tarjeta-perfil');
const info = document.querySelector('#info-oculta');

// Cuando el mouse entra al área de la tarjeta
tarjeta.addEventListener('mouseenter', () => {
    // Removemos la clase que lo oculta (ej. display: none en CSS)
    info.classList.remove('oculto');
    tarjeta.style.backgroundColor = "#8bef18";
});

// Cuando el mouse sale del área
tarjeta.addEventListener('mouseleave', () => {
    info.classList.add('oculto');
    tarjeta.style.backgroundColor = "#ea6a20";
});


const listaPadre = document.querySelector('#contenedor-tareas');

listaPadre.addEventListener('click', (e) => {
    // Evaluamos qué elemento exacto originó la burbuja del clic
    // Verificamos si el elemento clickeado tiene la clase 'tarea'
    if (e.target.classList.contains('tarea')) {

        // e.target es el <li> específico. Lo removemos del DOM.
        e.target.remove();
        console.log("Tarea eliminada correctamente.");

    } else {
        console.log("Hiciste clic en el espacio vacío del UL, no en una tarea.");
    }
});















///Delegación de eventos
/* const inputBuscador = document.querySelector('#name');

inputBuscador.addEventListener('keyup', (e) => {
    // 'e' es el objeto con el reporte del suceso
    console.log("Presionaste la tecla: ", e.key);
    console.log("El elemento que disparó esto es: ", e.target);
}); */







