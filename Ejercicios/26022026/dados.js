
let vidas = 3;
while (vidas > 0) {
    console.log("Lanzando dados");
    let lanzamiento = Math.floor(Math.random() * (7 - 1) + 1)
    console.log(`El número que sacas es: ${lanzamiento}`);
    if (lanzamiento === 6) {
        console.log("Ganaste");
        break
    } else if(lanzamiento===1) {
        console.log("Perdiste una vida");
        vidas--;
        console.log(`Te quedan ${vidas} vidas`);
        if (vidas === 0) {
            console.log("Perdiste, te quedas sin vidas");
        }
        
    }
 
}

