



    window.onload= function() {
let titulo = document.querySelector("#titulo");
let nombre = prompt ("como te llamas");
    if (nombre == ""){
        titulo.innerHTML = "Bienvenid@";
    } else {
        titulo.innerHTML = "Bienvenid@ " + nombre;
    }
}






