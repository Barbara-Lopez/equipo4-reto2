
window.onload=main()

function main(){
  try{
    for(i=0; i < 10; i++){
      generarCajaProducto('contenedorProductos', 1, 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.elagoradiario.com/wp-content/uploads/2021/05/Lagos-m%C3%A1s-grandes-del-mundo-1140x600.jpg', 'Noche en Lago', 'Pasa una preciosa npche en una cabaña en el lago.', 'Huesca', '70', '2')
    }
    actualizarCesta()
    generarEventos()
  }
  catch(error){
    alert(error)
  }
  
}


ultimoDesplegado={"botonDesplegable":null,"funcionDesplegable":null, "desplegado":false}

function generarEventos(){
    botonDesplegarCesta=document.getElementById("bCesta");
    botonDesplegarCesta.addEventListener("click", gestionarDesplegables)
    botonDesplegarLogin=document.getElementById("bInicio");
    botonDesplegarLogin.addEventListener("click", gestionarDesplegables)
    botonLogin=document.getElementById("bEnviar");
    botonLogin.addEventListener("click", iniciarSesion)
    botonesFavorito=document.getElementsByClassName("fav")
    for(boton of botonesFavorito){
      boton.addEventListener("click", anadirACesta)
      boton.addEventListener("click", actualizarCesta)
      boton.addEventListener("click", generarEventos)
    }
    botonesBorrar=document.getElementsByClassName("bBorrarProductoCesta")
    for(boton of botonesBorrar){
      boton.addEventListener("click", quitarDeCesta)
      boton.addEventListener("click", actualizarCesta)
    }
    botonesCant=document.getElementsByClassName("cantProductoCesta")
    for(boton of botonesCant){
      boton.addEventListener("click", anadirACesta)
      boton.addEventListener("click", actualizarCesta)
      boton.addEventListener("click", generarEventos)
    }
  }
  
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
  boxLogin=document.getElementById("contenedorLogin")
  if(boxLogin.getAttribute("class")=="hidden"){
    boxLogin.setAttribute("class","nohidden")
    bInicio.setAttribute("class", "bBonito pulsado")
    ultimoDesplegado["desplegado"]=true
  }
  else{
    boxLogin.setAttribute("class","hidden")
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
      producto=cesta[id]
      cesta.splice(id,1)
      producto["cant"]=parseInt(producto["cant"]) + 1
      cesta.push(producto)
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


function actualizarCesta(){
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
    cantElementoCesta.setAttribute("id", producto.id)
    cantElementoCesta.setAttribute("class", "cantProductoCesta")
    cantElementoCesta.setAttribute("type", "number")
    cantElementoCesta.setAttribute("value", producto["cant"])
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
            url:   'inicioSesion.php', //archivo que recibe la peticion
            type:  'post', //método de envio
    })
    .done(function( callback ) {
            alert(callback);
    })
  }
  catch(error){
    alert(error)
  }
  
}


function generarCajaProducto(idPadre, idproducto, img, titulo, descripcion, localidad, precio, stock){
  $('#' + idPadre).append($('<div/>', {
    'html' : '',
    'class' : 'producto',
      }).append($('<div/>', {
        'html' : '<img src="' + img + '" alt="fotoProducto"/>',
        'class' : 'fotoProducto',
      }),
      $('<div/>', {
        'html' : '<h2>' +  titulo + '</h2><span class="localidad">Localidad:' +
        '<b>' + localidad + '</b>' + '</span>' + 
        '<a id="' + idproducto + '" class="fav"><span>&#9734;</span></a>',
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