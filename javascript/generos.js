fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let genero = datos.data;
            genero.forEach(function(dataGenero){
            let contenedor = document.querySelector(`.grid-container`);
            contenedor.innerHTML +=  `  <a href="detallegenero.html">
                                        <div>
                                        <img class="imagen-genero" src=" ${dataGenero.picture_medium}" alt="" >
                                        <h5 class="genero-nombre" > ${dataGenero.name} </h5> 
                                        </div>
                                        </a>`
            })
    })
    .catch(function(error){
        console.error(error);
    })

    