let titulo = document.querySelector("#titulo");


let saludo = document.querySelector("#saludo");


window.onload=function(){
    let nombre = prompt ("como te llamas?")
    if (nombre=""){
        saludo.innerHTML = "Bienvenid@"
    } else{
        saludo.innerHTML = "Bienvenid@ " + nombre;
    }    
}






