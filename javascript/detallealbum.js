let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let albumID = objetoquery.get("id")



fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+albumID)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
     let album=datos
     console.log(album)  
     
     let contenedoralbum=document.querySelector('.album')

     contenedoralbum.innerHTML=`
                                    <img  class="imagencover" src="${album.cover_xl}" alt="">
                                    <h2 id="nombre-album" > ${album.title}  </h2>
                                    <a class="link" href="artistasdetalles.html?id=${album.artist.id}"> <h3>${album.artist.name}</h3>  </a>
                                    <h4 id="fecha-salida">${album.release_date}</h4>`
        
    })
    .catch(function(error){
        console.error(error);
    })