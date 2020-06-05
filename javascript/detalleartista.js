let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let artistaID = objetoquery.get("id")


fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`+ artistaID)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let detalleArtista = datos;
        console.log(detalleArtista)

            let nombre = document.querySelector(`#nombre`);
            nombre.innerHTML = detalleArtista.name   

            let seguidores = document.querySelector(`#seguidores`);
            seguidores.innerHTML = detalleArtista.fans  
 
                                        
            
    })
    .catch(function(error){
        console.error(error);
    })
        
    