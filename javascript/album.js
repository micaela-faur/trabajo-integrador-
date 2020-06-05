fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let album = datos.data;
            album.forEach(function(dataAlbum){
            let contenedor = document.querySelector(`.grid-container`);
            contenedor.innerHTML +=  `  <a href="detallealbum.html" class="text-decoration">
                                        <div class= "grid-column1">
                                        <img  src=" ${dataAlbum.cover_medium}" alt="" >
                                        <h3> ${dataAlbum.title} </h3>
                                        <h5> ${dataAlbum.artist.name} </h5> 
                                        </div>
                                        </a>`
            })
    })
    .catch(function(error){
        console.error(error);
    })

