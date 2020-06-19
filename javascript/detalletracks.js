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

        let contenedor= document.querySelector(".contenedor")
        contenedor.innerHTML=`
        <div>
        <div>
            <img id="imagen-track" src="${detalleTrack.album.cover_big}" alt="">
        </div>
        <div>
            <a href="artistasdetalles.html?id=${detalleTrack.artist.id}" id="nombre-artista"> <h3>${detalleTrack.artist.name} </h3>  </a> 

        </div>
       
        <h1 id="titulo-track">${detalleTrack.title}</h1>
        <div>

              <a href="detallealbum.html?id=${detalleTrack.album.id}"  id="nombre-album"> <h4>${detalleTrack.album.title} </h4>  </a> 
        </div>
      
       <div>
        <audio id="audio" src="${detalleTrack.preview}" controls ></audio>
       </div>
        <p id="duration">${detalleTrack.duartion}</p>
        <button class= "agregar"> Add to playlist</button>
   </div>
        
        
        `
            
    })


    .catch(function(error){
        console.error(error);
    })

