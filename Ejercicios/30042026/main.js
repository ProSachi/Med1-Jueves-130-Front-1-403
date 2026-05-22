// ==========================================
// 1. LA VARIABLE DE ESTADO GLOBAL
// (Se usa 'let' para poder reasignarla aplicando inmutabilidad)
// ==========================================
let usuariosRegistrados = [];

// ==========================================
// 2. MODIFICACIÓN DEL ESTADO
// ==========================================
const btnGuardar = document.querySelector('#btn-guardar');

btnGuardar.addEventListener('click', () => {
    const nuevoUsuario = { id: 1, nombre: "Ana" };
    
    // Actualizamos la variable global (Inmutabilidad con Spread Operator)
    usuariosRegistrados = [...usuariosRegistrados, nuevoUsuario];
    
    // Reflejamos el estado actual en la pantalla
    renderizarPantalla(); 
});

// ==========================================
// 3. LECTURA DEL ESTADO
// ==========================================
function renderizarPantalla() {
    // Esta función lee la variable global y construye el HTML
    console.log("Dibujando la lista con:", usuariosRegistrados);
}
