var formulario = document.getElementById("signup");

window.onload = iniciar;

function iniciar() {
    document.getElementById("Enviar").addEventListener('click',validar,false);
}

function validaUsuario() {
    var user = document.getElementById("usuario");
    limpiarError(user);
    if (user.value == "") {
        alert("Debe ingresar su nombre de usuario");
        error(user);
        user.focus();
        user.select();
        return false;
    }
    return true;
}

function validaCorreo() {
    var email = document.getElementById("correo");
    limpiarError(email);
    if (email.value == "") {
        alert("Debe ingresar un correo válido");
        error(email);
        email.focus();
        email.select();
        return false;
    }
    return true;
}

function validaPassword() {
    var password = document.getElementById("pass");
    limpiarError(password);
    if (password.value.length < 3) {
        alert(" Debe digitar una contraseña mayor a 3 caracteres");
        error(password);
        password.focus();
        password.select();
        return false;
    }
    return true;   
}

function validaPassword2() {
    var password2 = document.getElementById("pass2");
    limpiarError(password2);
    if (password2.value == "") {
        alert("Debe confirmar su contraseña");
        error(password2);
        password2.focus();
        password2.select();
        return false;
    }
    return true;  
}

function validaPaswords() {
    var password = document.getElementById("pass"), password2 = document.getElementById("pass2");
    limpiarError(password);
    if (password.value !== password2.value) {
        alert("Las contraseñas no son iguales");
        error(password);
        password.value = "";
        password2.value = "";
        password.focus();
        password.select();
        return false;
    }
    return true;
}

function validar(e) {
    if (validaUsuario() && validaCorreo() && validaPassword() && validaPassword2() && validaPaswords() && confirm("Presione aceptar si desea enviar el formulario")) {
        return true;
    }else {
        e.preventDefault();
        return false;
    }
}

function error(user) {
    user.className = "error";
    user.focus();
    
}

function limpiarError(user) {
    user.className = "datos";
}

function error(email) {
    email.className = "error";
    email.focus();
    
}

function limpiarError(email) {
    email.className = "datos";
}

function error(password) {
    password.className = "error";
    password.focus();
    
}

function limpiarError(password) {
    password.className = "datos";
}

function error(password2) {
    password2.className = "error";
    password2.focus();
    
}

function limpiarError(password2) {
    password2.className = "datos";
}

function error(password) {
    password.className = "error";
    password.focus();
    
}

function limpiarError(password) {
    password.className = "datos";
}


