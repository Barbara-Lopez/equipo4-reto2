
$(document).ready(
    function (){
        
        $.ajax({
        type: "post",
        url: "../php/cogerProductos.php",
        data: {},
        })
        .done(function(data){
            
            var arrayProductos = JSON.parse(data); // lo convierte a Array
            alert(arrayProductos[0]["direccion"])
            for(i=0; i < arrayProductos.length; i++){
            //generarCajaProductoJSON('contenedorProductos', arrayProductos[i])
            generarCajaProducto('contenedorProductos', arrayProductos[i]["idproducto"], arrayProductos[i]["imagenfoto"], arrayProductos[i]["titulo"], arrayProductos[i]["descripcion"],arrayProductos[i]["direccion"], arrayProductos[i]["precio"], arrayProductos[i]["stock"])
            //generarCajaProducto('contenedorProductos', i, 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.elagoradiario.com/wp-content/uploads/2021/05/Lagos-m%C3%A1s-grandes-del-mundo-1140x600.jpg', 'Noche en Lago', 'Pasa una preciosa npche en una cabaña en el lago.', 'Huesca', '70', '2')

            }
        });
        
        
        
});


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
  
  
  
  
  
  
  
  
  
  
  function generarCajaProductoJSON(clasePadre, productoJSON){
    idproducto = productoJSON["idproducto"]
    img = productoJSON["img"]
    titulo = productoJSON["titulo"]
    descripcion = productoJSON["descripcion"]
    localidad = productoJSON["localidad"]
    precio = productoJSON["precio"]
    stock = productoJSON["stock"]
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