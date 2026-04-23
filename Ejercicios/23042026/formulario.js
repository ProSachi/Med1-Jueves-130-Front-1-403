import usuariosRegistrados from "./usuariosRegistrados.js";

const formReg = document.querySelector('#form-registro');
const inputUser = document.querySelector('#username');
const inputEmail = document.querySelector('#useremail');

function validarUsuario() {
    const spanError = inputUser.nextElementSibling;
    const usuario = inputUser.value.trim().toLowerCase();

    if (usuario.length < 4) {
        spanError.textContent = "El usuario debe tener al menos 4 letras.";
        spanError.style.color = "red";
        inputUser.style.borderColor = "red";
        return false;
    }

    spanError.textContent = "Usuario valido";
    spanError.style.color = "green";
    inputUser.style.borderColor = "green";
    return true;
}

function validarCorreo() {
    const spanEmail = inputEmail.nextElementSibling;
    const email = inputEmail.value.trim().toLowerCase();
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length < 1) {
        spanEmail.textContent = "El correo no puede estar vacio";
        spanEmail.style.color = "red";
        inputEmail.style.borderColor = "red";
        return false;
    }

    if (!formatoCorreo.test(email)) {
        spanEmail.textContent = "Formato invalido. Usa: texto@texto.com";
        spanEmail.style.color = "red";
        inputEmail.style.borderColor = "red";
        return false;
    }

    spanEmail.textContent = "Correo valido";
    spanEmail.style.color = "green";
    inputEmail.style.borderColor = "green";
    return true;
}

inputUser.addEventListener('blur', validarUsuario);
inputEmail.addEventListener('blur', validarCorreo);

formReg.addEventListener('submit', (e) => {
    e.preventDefault();

    const esUsuarioValido = validarUsuario();
    const esCorreoValido = validarCorreo();

    if (esUsuarioValido && esCorreoValido) {
        console.log('Formulario valido');
    }
});


