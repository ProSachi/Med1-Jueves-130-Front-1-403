const password = "12345";

for (let i = 0; i < 3; i++) {
    let contra = prompt("Ingresa la contraseña: \n");
    if (contra === password) {
        console.log("Contraseña Correcta");
        // isBlock = false
        break;
    }
    console.log("Contraseña Incorrecta, intenta de nuevo.");

    if (i >= 2) {
        console.log("Usuario bloqueado.");
    }
}
//console.log(`¿El usuario esta bloqueado? ${isBlock}`);
