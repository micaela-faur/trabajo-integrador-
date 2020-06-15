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

            let imagenArtista = document.querySelector(`#imagen-artist`);
            imagenArtista.src = detalleArtista.picture_medium 

            let seguidores = document.querySelector(`#seguidores`);
            seguidores.innerHTML = "Segudiores:  " + detalleArtista.nb_fan 
                                        
            
    })
    .catch(function(error){
        console.error(error);
    })
        
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+ artistaID + "/top")

    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(datos){
        let detalleArtista = datos.data;
        console.log(detalleArtista)

        for (const artista of detalleArtista) {
            let top5 = document.querySelector("#top5")
            top5.innerHTML += ` <div>  
                                    <h4> ${artista.title} </h4>
                                </div> `
        }
            

    })

    .catch(function(error){
        console.error(error);
    })


