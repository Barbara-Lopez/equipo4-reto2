$( document ).ready(main())

function main(){
  try{
    actualizarCesta()
    generarEventos()
    comprobarSesion()
    
  }
  catch(error){
    alert(error)
  }
  
}



function generarEventos(){
    botonDesplegarCesta=document.getElementById("bBuscar");
    botonDesplegarCesta.addEventListener("click", consultarProductosLike)
    botonDesplegarCesta=document.getElementById("bCesta");
    botonDesplegarCesta.addEventListener("click", gestionarDesplegables)
    botonDesplegarLogin=document.getElementById("bInicio");
    botonDesplegarLogin.addEventListener("click", gestionarDesplegables)
    botonLogin=document.getElementById("bEnviar");
    botonLogin.addEventListener("click", iniciarSesion)
    botonesFavorito=document.getElementsByClassName("fav")
    botonComprarCesta=document.getElementById("bComprarCesta")
    botonComprarCesta.addEventListener("click", comprar)

    for(boton of botonesFavorito){
      //boton.addEventListener("click", anadirACesta)
      //boton.addEventListener("click", actualizarCesta)
    }
    botonesAnadirCesta=document.getElementsByClassName("botonCesta")
    for(boton of botonesAnadirCesta){
      boton.addEventListener("click", anadirACesta)
      boton.addEventListener("click", actualizarCesta)
    }
    botonesBorrar=document.getElementsByClassName("bBorrarProductoCesta")
    for(boton of botonesBorrar){
      boton.addEventListener("click", quitarDeCesta)
      boton.addEventListener("click", actualizarCesta)
    }
    botonesCant=document.getElementsByClassName("cantProductoCesta")
    for(boton of botonesCant){
      boton.addEventListener("click", modCantCesta)
      boton.addEventListener("click", actualizarCesta)
    }
    eventoSideNav()
    botonRegistro()
  }
  
  function botonRegistro(){
    $("#bRegistro").click(function(event){
      location.href="/proyectoWallapop/portfolio/php/vistas/registrarse.php";
    });
}
  




//----------------GESTION DESPLEGABLES---------------------------------------------------
function eventoSideNav() {
  $(".closebtn").click(function() {
    $("#mySidebar").animate({width: '0px'});
  });
  $(".openbtn").click(function() {
    $("#mySidebar").animate({width: '250px'});
  });
}


ultimoDesplegado={"botonDesplegable":null,"funcionDesplegable":null, "desplegado":false}


function gestionarDesplegables(){ //si el boton que llama a la funcion es diferente al ultimo se ejecuta la ultima funcion almacenada
    if(ultimoDesplegado["desplegado"]==true && ultimoDesplegado["botonDesplegable"]!=this.id){
      ultimoDesplegado["desplegable"]()
    }
    switch(this.id){
      case "bCesta":
        ultimoDesplegado["botonDesplegable"]=this.id
        ultimoDesplegado["desplegable"] = desplegarCesta
        desplegarCesta()
        break
      case "bInicio":
        ultimoDesplegado["botonDesplegable"]=this.id
        ultimoDesplegado["desplegable"] = desplegarLogin
        desplegarLogin()
        break
    }
  }
  
  function desplegarLogin(){
    boxLogin=$("#contenedorLogin")
    if(boxLogin.hasClass("hidden")){
      boxLogin.removeClass("hidden")
      boxLogin.addClass("nohidden")
      bInicio.setAttribute("class", "bBonito pulsado")
      ultimoDesplegado["desplegado"]=true
    }
    else{
      boxLogin.removeClass("nohidden")
      boxLogin.addClass("hidden")
      bInicio.setAttribute("class", "bBonito")
      ultimoDesplegado["desplegado"]=false
    }
  }
  
  function desplegarCesta(){
    boxCesta=document.getElementById("contenedorCesta")
    if(boxCesta.getAttribute("class")=="cestaHidden"){
      boxCesta.setAttribute("class","cestaNoHidden")
      ultimoDesplegado["desplegado"]=true
    }
    else{
      boxCesta.setAttribute("class","cestaHidden")
      ultimoDesplegado["desplegado"]=false
    }
  }






//----------------------------GESTION CESTA---------------------------------





function anadirACesta(){
  cesta = recuperarCesta()
  producto = null
  if(cesta==null){
    cesta=[]
  }
  encontrado=0
  for(id in cesta){
    if(cesta[id]["id"]==this.id){
      encontrado=1
      cesta[id]["cant"]=parseInt(cesta[id]["cant"]) + 1
      guardarCesta(cesta)
    }
  }
  if(encontrado==0){
    producto={id:this.id, cant:"1"}
    cesta.push(producto)
    cesta=JSON.stringify(cesta)
    localStorage.setItem("cesta", cesta)
    alert("Producto añadido a la cesta")
  }
}

function modCantCesta(){
  cesta = recuperarCesta()
  for(id in cesta){
    if(cesta[id]["id"]==this.id){
      cesta[id]["cant"]=$('.cantProductoCesta ','#' + this.id).val()
      guardarCesta(cesta)
    }
  }
}


function quitarDeCesta(id){
  cesta = recuperarCesta()
  for(id in cesta){
    if(cesta[id]["id"]==this.id){
      cesta.splice(id,1)
      break
    }
  }
  guardarCesta(cesta)
}

function recuperarCesta(){
  cesta = localStorage.getItem("cesta")
  cesta = JSON.parse(cesta);
  return cesta
}
function guardarCesta(cesta){
  cesta=JSON.stringify(cesta)
  localStorage.setItem("cesta", cesta)
}
function eliminarCesta(){
  localStorage.setItem("cesta", null)
  actualizarCesta()
}


function actualizarCesta(){    //vulnerable a inyeccion de codigo (vulnerabilidad XSS) si se modifica el localstorage
  contenedorItemsCesta = document.getElementById("contenedorItemsCesta")
  contenedorItemsCesta.innerHTML=""
  cesta = recuperarCesta()
  totalCesta=0
  for(id in cesta){
    producto = cesta[id]
    elementoCesta = document.createElement("li")
    elementoCesta.setAttribute("id", producto["id"])
    elementoCesta.setAttribute("class", "itemCesta")
    nombreElementoCesta = document.createElement("span")
    nombreElementoCesta.setAttribute("class", "nombreProductoCesta")
    nombreElementoCesta.innerHTML = producto["id"] //++++++++++consulta sql 
    precioElementoCesta = document.createElement("span")
    precioElementoCesta.setAttribute("class", "precioProductoCesta")
    precioElementoCesta.innerHTML = 22 + "&#8364;" //--------------sql
    cantElementoCesta = document.createElement("input")
    cantElementoCesta.setAttribute("id", producto["id"])
    cantElementoCesta.setAttribute("class", "cantProductoCesta")
    cantElementoCesta.setAttribute("type", "number")
    cantElementoCesta.setAttribute("value", producto["cant"])
    cantElementoCesta.setAttribute("min", 1)
    //cantElementoCesta.setAttribute("max", "")
    cantElementoCesta.innerHTML = producto["cant"]
    subTotalElementoCesta = document.createElement("span")
    subTotalElementoCesta.setAttribute("class", "subTotal")
    subTotal = parseInt(precioElementoCesta.innerHTML) * parseInt(producto["cant"])
    totalCesta=totalCesta + subTotal
    subTotalElementoCesta.innerHTML = subTotal + "&#8364;"
    iconoBorrarProductoCesta=document.createElement("span")
    iconoBorrarProductoCesta.setAttribute("class", "bBorrarProductoCesta")
    iconoBorrarProductoCesta.setAttribute("id", producto["id"])
    iconoBorrarProductoCesta.innerHTML="&#128465"
    elementoCesta.appendChild(nombreElementoCesta)
    elementoCesta.appendChild(precioElementoCesta)
    elementoCesta.appendChild(cantElementoCesta)
    elementoCesta.appendChild(subTotalElementoCesta)
    elementoCesta.appendChild(iconoBorrarProductoCesta)
    contenedorItemsCesta.appendChild(elementoCesta) 
  }
  labelTotalCesta = document.getElementById("totalCesta")
  labelTotalCesta.innerHTML=totalCesta + "&#8364;"

  this.addEventListener("click", generarEventos) //ejecuto esta funcion aqui por comodidad ya que siempre que se actualiza 
                                                //hay que generar elementos
}



function comprar(){
  eliminarCesta();
  alert("Gracias por su compra!");
}





//-------------------------VALIDACIONES----------------------


function validarFiltrosBusqueda(){
  tema = $('#fFiltro').val()
  expReg = /^[0-9a-zA-Z]+$/
  precioMin = $('#fPrecioMin').val() 
  precioMax = $('#fPrecioMax').val() 
  if(!expReg.test(tema)){
    throw "Solo se admiten letras y numeros en el campo de busqueda..."
  }
  if(tema.val().length > 50){
    throw "Se admiten un maximo de 50 caracteres"
  }
  if(precioMin < 0 || precioMax > 10000000){
    throw "El rango de precios no es posible"
  }
  if(precioMin >= precioMax ){
    throw "El precio minimo no puede ser superior al maximo...vamos piensa un poco..."
  }

}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function iniciarSesion(){
  try{
    expReg = /^[0-9a-zA-Z]+$/
    var parametros = {
            "username" : document.getElementById("inputUsuario").value,
            "pass" : document.getElementById("inputPass").value
    };
    if(!expReg.test(parametros["username"]) || !expReg.test(parametros["pass"])){
      throw 'La contraseña y el usuario suele pueden contener letras y numeros'
    }
    $.ajax({
            data:  parametros, //datos que se envian a traves de ajax
            url:   '/proyectoWallapop/portfolio/php/bdconsultas/usuarios/inicioSesion.php', //archivo que recibe la peticion
            type:  'post', //método de envio
    })
    .done(function( callback ) {
          infoSesion=JSON.parse(callback);
          if(infoSesion["token"]!=undefined && infoSesion["expiracion"]!=undefined){
            document.cookie = "SESION=" + infoSesion["token"] + "; expires=" + infoSesion["expiracion"] + '; path=/;'
            mostrarOcultarElementosSesion(true)
          }
          alert(infoSesion["msg"])
    })
  }
  catch(error){
    alert(error)
  }
}


//------------------------------FUNCION PARA COMPROBAR EL LOGIN---------------------

function comprobarSesion(){
  sesion = {'token' : getCookie("SESION")}
  $.ajax({
    data:  sesion, //no hace falta enviar la cookie, php tiene acceso
    url:   '/proyectoWallapop/portfolio/php/bdconsultas/usuarios/comprobarSesion.php', //archivo que recibe la peticion
    type:  'post', //método de envio
    dataType: 'json',
    complete: function (callback){
      infoSesion=callback["responseJSON"]
      if(infoSesion["expired"]=='true'){
        mostrarOcultarElementosSesion(false)
        return false;
      }
      if(infoSesion["expired"]=='false'){
        mostrarOcultarElementosSesion(true)
        console.log(infoSesion["idusu"])
        idUsu = infoSesion["idusu"]
        return idUsu
      }
      },
    error: function( error ) {
      console.log(error)
      return false;
    }
  })
}


//-------------------------FUNCION PARA OCULTAR O MOSTRAR ELEMENTOS SEGUN LA SESION-----------------------


function mostrarOcultarElementosSesion(sesion){ //true para ocultar elementos cuando se logee
  elementosOcultar=$('.ocultosLogin')  //elementos que se ocultaran al iniciar sesion
  elementosMostrar=$('.noOcultosLogin') //elementos que se mostraran al iniciar sesion
  if(sesion == true){
    elementosOcultar.addClass("hiddenLogin")
    elementosMostrar.addClass("noHiddenLogin")
  }
  else{
    elementosOcultar.removeClass("hiddenLogin")
    elementosMostrar.removeClass("noHiddenLogin")
  }
}



//----------------GENERACION DINAMICA DE CAJAS PRODUCTO-----------------



function generarCajaProducto(clasePadre, idproducto, img, titulo, descripcion, localidad, precio, stock){
  $('.' + clasePadre).append($('<div/>', {
    'html' : '',
    'class' : 'producto',
      }).append($('<div/>', {
        'html' : '<img src="' + img + '" alt="fotoProducto"/>',
        'class' : 'fotoProducto',
      }),
      $('<div/>', {
        'html' : '<h2>' +  titulo + '</h2><span class="localidad">Localidad:' +
        '<b>' + localidad + '</b>' + '</span>' + 
        '<a id="' + idproducto + '" class="fav"><span>👍</span></a>',
        'class' : 'tituloProducto',
      }),
      $('<div/>', {
        'html' : '<p>' + descripcion + '</p>',
        'class' : 'descripcionProducto',
      }),
      $('<div/>', {
        'html' : '<label><b>Precio: </b>' + precio + '&euro;</label>' +
        '<label class="stock"><b>Stock: </b>' + stock + '</label>',
        'class' : 'precioDetalles',
        }).append($('<button/>', {
          'html' : 'Detalles &#128270;',
          'type' : 'button',
          'class' : 'botonProducto botonDetalles'
        })
        ),
      $('<div/>', {
        'class' : 'botonesProducto',
        }).append($('<button/>', {
          'html' : '&#128722; Añadir a cesta',
          'id' : idproducto,
          'type' : 'button',
          'class' : 'botonProducto botonCesta'
        }),
          $('<button/>', {
            'html' : '&#9993; Contactar',
            'type' : 'button',
            'class' : 'botonProducto botonContacto'
          })
        )
      )
  )
}
//-------------------------------funcion para cargar 1 imagen
function cargarImagenProducto(productoJSON){
  id={id:productoJSON["idproducto"]}
  $.ajax({
    data:  id, //no hace falta enviar la cookie, php tiene acceso
    url:   '../bdconsultas/productos/cargarImagenProducto.php', //archivo que recibe la peticion
    type:  'get', //método de envio
    dataType: 'json',
    complete:function( callback ) {
      img = callback['responseText']
      generarCajaProductoJSON("contenedorProductos", productoJSON, img)   //cagada de estructura, al final llamamos desde aqui por sincronia
                                                                          //no hay tiempo para hacerlo bien
    }, 
    error: function( error ){
      console.log("Error -->" + JSON.stringify(error))
      }
  })

    
}


function generarCajaProductoJSON(clasePadre, productoJSON, img){
  idproducto = productoJSON["idproducto"]
  titulo = productoJSON["titulo"]
  descripcion = productoJSON["descripcion"]
  localidad = productoJSON["localidad"]
  precio = productoJSON["precio"]
  stock = productoJSON["stock"]
  $('.' + clasePadre).append($('<div/>', {
    'class' : 'producto',
      }).append($('<div/>', {
        'html' : img,
        'class' : 'fotoProducto',
      }),
      $('<div/>', {
        'html' : '<h3>' +  titulo + '</h3><span class="localidad">Localidad:' +
        '<b>' + localidad + '</b>' + '</span>' + 
        '<a id="' + idproducto + '" class="fav"><span>👍</span></a>',
        'class' : 'tituloProducto',
      }),
      $('<div/>', {
        'html' : '<p>' + descripcion + '</p>',
        'class' : 'descripcionProducto',
      }),
      $('<div/>', {
        'html' : '<label><b>Precio: </b>' + precio + '&euro;</label>' +
        '<label class="stock"><b>Stock: </b>' + stock + '</label>',
        'class' : 'precioDetalles',
        }).append($('<button/>', {
          'html' : 'Detalles &#128270;',
          'type' : 'button',
          'class' : 'botonProducto botonDetalles'
        })
        ),
      $('<div/>', {
        'class' : 'botonesProducto',
        }).append($('<button/>', {
          'html' : '&#128722; Añadir a cesta',
          'id' : idproducto,
          'type' : 'button',
          'class' : 'botonProducto botonCesta'
        }),
                  $('<button/>', {
            'html' : '&#9993; Contactar',
            'type' : 'button',
            'class' : 'botonProducto botonContacto'
          })
        )
      )
  )
}



function insertarProductos(productosJSON){
  for(id in productosJSON){
    cargarImagenProducto(productosJSON[id])
    //generarCajaProductoJSON('contenedorProductos', productosJSON[id])
  }
  
}

function consultarProductos(){
  //codigo
  $.ajax({
    //type: "GET", 
    url:  "/proyectoWallapop/portfolio/php/bdconsultas/productos/selectAllProducto.php", 
    //data: null,
    //dataType:'json',
    success: function(datos){
        var productos = JSON.parse(datos)
        insertarProductos(productos)
    },error: function(error){
      alert(error)
      }     
    });
    //codigo

}

function consultarProductosLike(){
  console.log('ejecuta')
  $('.contenedorProductos').html("")
  patron={patron:$(".inputBuscador").val()}
  $.ajax({
    type: "POST", 
    url:  "/proyectoWallapop/portfolio/php/bdconsultas/productos/selectLikeProducto.php", 
    data: patron,
    dataType:'json',
    success: function(productos){
      console.log(productos)
        $('.contenedorProductos').html("")
        insertarProductos(productos)
    },error: function(error){
      alert(error)
      }     
    });
    //codigo

}

function rellenarCategorias(){
  $.ajax({
    //type: "GET", 
    url:  "/proyectoWallapop/portfolio/php/bdconsultas/categorias/selectAllCategoria.php", 
    //data: null,
    //dataType:'json',
    success: function(datos){
        var categorias = JSON.parse(datos)
        select = $("#fCategoria")
        for(id in categorias){
          select.append("<option>" + categorias[id]["nombrecat"] + "</option>")
        }
    },error: function(error){
      alert(error)
      }     
    });
}

function rellenarLocalidades(){
  $.ajax({
    //type: "GET", 
    url:  "/proyectoWallapop/portfolio/php/bdconsultas/categorias/selectAllLocalidad.php", 
    //data: null,
    //dataType:'json',
    success: function(datos){
        var localidades = JSON.parse(datos)
        console.log(localidades)
        select = $("#fLocalidad")
        for(id in localidades){
          select.append("<option>" + localidades[id]["localidad"] + "</option>")
        }
    },error: function(error){
      alert(error)
      }     
    });
}























