fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let playlist = datos.data;
            playlist.forEach(function(dataPlaylist){
            let contenedor = document.querySelector(`.listas`);
            contenedor.innerHTML +=  `<div class= "column">
                                        <img  src=" ${dataPlaylist.picture_medium}" alt="" >
                                        <h2 class="canciones"> ${dataPlaylist.title} </h2>
                                        <h4 class="canciones"> ${dataPlaylist.creation_date} </h4> 
                                        </div>`
            })
    })
    .catch(function(error){
        console.error(error);
    })



    //.canciones