let querystring = window.location.search 
let objetoquery = new URLSearchParams (querystring)

let resultadoBuscador = objetoquery.get ("buscador") 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=`+ resultadoBuscador)
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(datos){
        let buscador = datos.data;
        console.log(buscador)
        buscador.forEach(function(cancion){
            let gridContainer = document.querySelector(".grid-container")
            gridContainer.innerHTML += `<div> 
                                            <img src="${cancion.artist.picture_medium}" > 
                                            <h3 class="cancion-title"> ${cancion.title} </h3>
                                            <audio src="${cancion.preview}" controls>   </audio>
                                    </div> `
        })
    })

    .catch(function(error){
        console.log(error);
        return null; 
    })

