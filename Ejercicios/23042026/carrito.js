
// Escuchamos los clics en todo el documento (Delegación)
document.addEventListener('click', (e) => {
    
    // CASO 1: El usuario hizo clic en cualquier botón de SUMAR
    if (e.target.classList.contains('btn-sumar')) {
        
        // Traversing: Buscamos al hermano que está JUSTO ANTES del botón '+'
        const spanCantidad = e.target.previousElementSibling;
        
        // Extraemos el número actual, lo convertimos y sumamos 1
        let cantidadActual = Number(spanCantidad.textContent);
        spanCantidad.textContent = cantidadActual + 1;
    }

    // CASO 2: El usuario hizo clic en cualquier botón de RESTAR
    if (e.target.classList.contains('btn-restar')) {
        
        // Traversing: Buscamos al hermano que está JUSTO DESPUÉS del botón '-'
        const spanCantidad = e.target.nextElementSibling;
        
        let cantidadActual = Number(spanCantidad.textContent);
        
        // Evitamos que compre "0" o números negativos
        if (cantidadActual > 1) {
            spanCantidad.textContent = cantidadActual - 1;
        }
    }
});
