let querystring = window.location.search
let objetoquery = new URLSearchParams (querystring)

let generoID = objetoquery.get("id")



fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ generoID +"/artists')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
     let detalleGenero = datos;
     console.log(detalleGenero)  
     
     let nombreGenero =document.querySelector('.nombre-genero')
     nombreGenero.innerHTML=detalleGenero.name

            
    })
    .catch(function(error){
        console.error(error);
    })

fetch(' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ artistaID +"/artists')

  .then(function(respuesta){
    return respuesta.json();
    })
    .then(function(datos){
        let nombreArtistas = datos.data;
        console.log(nombreArtistas)
    })
  for (const artistas of nombreArtistas) {
      let top10 = document.querySelector ('.artista')
      top10.innerHTML = ` <div>  
      <h4> ${artistas.name} </h4>
  </div> `
  }