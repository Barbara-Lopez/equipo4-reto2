$( document ).ready(consultarUltimosProductos()) //codigo repetido....todo esto es una cagada pero hay que hacerlo funcionar...

function consultarUltimosProductos(){
    //codigo
    $.ajax({
      //type: "GET", 
      url:  "/proyectoWallapop/portfolio/php/bdconsultas/productos/selectLastProducts.php", 
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

  function insertarProductos(productosJSON){
    for(id in productosJSON){
      cargarImagenProducto(productosJSON[id])
      //generarCajaProductoJSON('contenedorProductos', productosJSON[id])
    }
    
  }

  //-------------------------------funcion para cargar 1 imagen
function cargarImagenProducto(productoJSON){
    id={id:productoJSON["idproducto"]}
    $.ajax({
      data:  id, //no hace falta enviar la cookie, php tiene acceso
      url:   '/proyectoWallapop/portfolio/php/bdconsultas/productos/cargarImagenProducto.php', //archivo que recibe la peticion
      type:  'get', //método de envio
      dataType: 'json',
      complete:function( callback ) {
        img = callback['responseText']
        generarCajaProductoJSON("contenedorProductos", productoJSON, img)   //cagada de estructura, al final llamamos desde aqui por sincronia
                                                                            //no hay tiempo para hacerlo bien
      }, 
      error: function( error ){
        //console.log("Error -->" + JSON.stringify(error))
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
