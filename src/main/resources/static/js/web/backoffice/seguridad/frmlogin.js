if(window.location.search == "?error") {
    let msg = document.querySelector(".alert");
    msg.classList.remove("d-none");
    msg.innerText = "Usuario y/o contraseña incorrectos";
}