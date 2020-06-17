let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let generoID = objetoquery.get("id")



fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+ generoID )
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
     let detalleGenero = datos;
     console.log(detalleGenero)  
     
     let nombreGenero =document.querySelector('#generos')
     nombreGenero.innerHTML=`<h2>${detalleGenero.name}</h2>`

            
    })
    .catch(function(error){
        console.error(error);
    })

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+ generoID +'/artists')

  .then(function(respuesta){
    return respuesta.json();
    })
    .then(function(datos){
        let nombreArtistas = datos.data;
        console.log(nombreArtistas)
        for (const artistas of nombreArtistas) {
            let contenedorArtistas = document.querySelector ('.grid-container')
            contenedorArtistas.innerHTML += `
            <a href="artistasdetalles.html?id=${artistas.id}" class="text-decoration">
            <div class= "grid-column1">
            <img  src=" ${artistas.picture_medium}" alt="" >
            <h3 class="letra-title"> ${artistas.name} </h3> 
            </div>
            </a>
            
            
            
            
            `
        }
    })