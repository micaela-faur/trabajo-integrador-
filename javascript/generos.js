fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let genero = datos.data;
            genero.forEach(function(dataGenero){
            let contenedor = document.querySelector(`.grid-container`);
            contenedor.innerHTML +=  `<div>
                                        <img  src=" ${dataGenero.picture_medium}" alt="" >
                                        <h5> ${dataGenero.name} </h5>
                                        </div>`
            })
    })
    .catch(function(error){
        console.error(error);
    })

    