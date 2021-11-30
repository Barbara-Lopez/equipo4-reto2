function comprobarSesionRedirect(){ //se ejecuta al cargar paginas que necesitan de inicio de sesion
  $.ajax({
    data:  sesion, //no hace falta enviar la cookie, php tiene acceso
    url:   '/proyectoWallapop/portfolio/php/bdconsultas/usuarios/comprobarSesion.php', //archivo que recibe la peticion
    type:  'post', //método de envio
    dataType: 'json',
    complete: function (callback){
      infoSesion=callback["responseJSON"]
      if(infoSesion["expired"]=='true'){
        alert("Debes de iniciar sesion para acceder")
        window.location = "/proyectoWallapop/portfolio/php/index.php";
      }},
    error: function( error ) {
      console.log(error)
      return false;
    }
  })
}

comprobarSesionRedirect();