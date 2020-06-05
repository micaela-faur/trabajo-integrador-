fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let artista = datos.data;
            artista.forEach(function(dataArtista){
            let contenedor = document.querySelector(`.grid-container`);
            contenedor.innerHTML +=  ` <a href="artistasdetalles.html?id=${dataArtista.id}" class="text-decoration"> 
                                        <div class= "grid-column1">
                                        <img  src=" ${dataArtista.picture_medium}" alt="" >
                                        <h3> ${dataArtista.name} </h3> 
                                        </div>
                                        </a>
                                         `
                                        
            })
    })
    .catch(function(error){
        console.error(error);
    })