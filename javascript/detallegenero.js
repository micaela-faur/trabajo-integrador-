let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let generoID = objetoquery.get("id")



fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0/artists'+generoID)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
     let detalleGenero = datos
     console.log(detalleGenero)  
     
     let nombreGenero =document.querySelector('.nombre-genero')
     nombreGenero.innerHTML=detalleGenero.name

     
            
    })
    .catch(function(error){
        console.error(error);
    })


//fetch("https://cors-anywhere.herokuapp.com/")





//let artistas = document.querySelector (".artistas")
  //  artistas.innerHTML=detalleGenero.genre.artist.name