// SIMULACIÓN DE LA BASE DE DATOS (Arreglo en RAM)
let tareas = [];
const botonEnviar = document.querySelector('#btnSave');
const botonCargar = document.querySelector('#btnLoad');
const botonLimpiar = document.querySelector('#btnClear');
const botonLimpiarId = document.querySelector('#btnClearId');



function agregarTarea(nuevaTarea) {
    // 1. Modificamos la RAM
    tareas.push(nuevaTarea);
    // 2. Empaquetamos a JSON (Texto)
    const tareasJSON = JSON.stringify(tareas);
    // 3. Guardamos en el disco del navegador
    localStorage.setItem('misTareas', tareasJSON);
}

function cargarTareas() {
    // 1. Buscamos el texto en el disco
    const datosGuardados = localStorage.getItem('misTareas');
    // 2. Evaluamos: ¿Había algo guardado?
    if (datosGuardados !== null) {
        // 3. Desempaquetamos el texto de vuelta a un Arreglo Real
        tareas = JSON.parse(datosGuardados);
        console.log("Tareas recuperadas:", tareas);
    } else {
        console.log("Es la primera vez que entra, no hay tareas.");
        tareas = [];
    }
}

function limpiarTodo(){
    localStorage.clear()
    console.log("Limpiando de manera silenciosa");
}
function limpiarUno(){
    localStorage.removeItem('misTareas2')
    console.log("Limpiando uno de manera silenciosa");
}

botonEnviar.addEventListener('click', () => {
    console.log("Estoy guardando de manera silenciosa");
    agregarTarea({id: 1,mensaje: "Guardado"
        });
});

botonCargar.addEventListener('click', () => {
    console.log("Estoy cargando los datos de manera silenciosa");
    cargarTareas();
});
botonLimpiar.addEventListener('click', () => {
    limpiarTodo();
});
botonLimpiarId.addEventListener('click', () => {
    limpiarUno();
});










