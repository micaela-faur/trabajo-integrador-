fetch(//url)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        //trabajo con los datos 
        let album = datos.albums.data;

        albums.forEach(function(dataAlbum) {
            let contenedor = document.querySelector(`. //class a modificar`)
            contenedor.innerHTML += //el html a modificar 
            
        });
    })
    .catch(function(error){
        console.error(error);
    }
}) 


