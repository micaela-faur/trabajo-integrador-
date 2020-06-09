fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let tracks = datos.data;
            tracks.forEach(function(dataTracks){
            let contenedor = document.querySelector(`.grid-container`);
            contenedor.innerHTML +=  ` <a href="detalletracks.html?id=${dataTracks.id}"> 
                                        <div class= "grid-column1">
                                        <img  src=" ${dataTracks.artist.picture_medium}" alt="" >
                                        <h3 class="letra-title"> ${dataTracks.title} </h3>
                                        <h5 class="letra-artist"> ${dataTracks.artist.name} </h5> 
                                        </div>
                                        </a>
                                         `
                                        
            })
    })
    .catch(function(error){
        console.error(error);
    })



