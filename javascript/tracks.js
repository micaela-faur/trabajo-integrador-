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
                                        <h5> ${dataTracks.title} </h5>
                                        <h4> ${dataTracks.artist.name} </h4> 
                                        </div>
                                        </a>
                                         `
                                        
            })
    })
    .catch(function(error){
        console.error(error);
    })



