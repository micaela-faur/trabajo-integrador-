let querystring = window.location.search 
let objetoquery = new URLSearchParams (querystring)

let trackID = objetoquery.get ("id") 

fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/`+ trackID)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let detalleTrack = datos;
        console.log(detalleTrack)

            let titulo = document.querySelector(`#titulo-track`);
            titulo.innerHTML = detalleTrack.title

            let nombreArtista = document.querySelector ("#nombre-artista")
            nombreArtista.innerHTML = detalleTrack.artist.name

            let duration = document.querySelector ("#duration")
            duration.innerHTML = detalleTrack.duration + " minutos"

            let audio = document.querySelector ("#audio")
            audio.src = detalleTrack.preview 

            let imagenTrack = document.querySelector ("#imagen-track")
           imagenTrack.src = detalleTrack.artist.picture_medium

            let nombreAlbum = document.querySelector ("#nombre-album")
            nombreAlbum.innerHTML = detalleTrack.album.title
            
    })


    .catch(function(error){
        console.error(error);
    })

