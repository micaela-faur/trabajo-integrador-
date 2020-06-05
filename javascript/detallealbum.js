let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let albumID = objetoquery.get("id")


fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/`+ albumID)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let detalleAlbum = datos;
        console.log(detalleAlbum)

            let nombreAlbum = document.querySelector(`#nombre-album`);
            nombreAlbum.innerHTML = 

            let seguidores = document.querySelector(`#seguidores`);
            seguidores.innerHTML = 
 
                                        
            
    })
    .catch(function(error){
        console.error(error);
    })