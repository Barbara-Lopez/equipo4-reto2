function Producto(nombre,descripcion,precio,stock,categoria,foto){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.precio=precio;
    this.stock=stock;
    this.categoria=categoria;
    this.foto=foto;
}
function Usuario(nif,contrasena,nombre,correo,direccion,foto){
    this.nif=nif;
    this.contrasena=contrasena;
    this.nombre=nombre;
    this.correo=correo;
    this.direccion=direccion;
    this.foto=foto;
}

function crearUsuario(nif,contrasena,nombre,correo,direccion,foto){
    let user= new Usuario(nif,contrasena,nombre,correo,direccion,foto);
    let persona= {
        "nif" : user.nif,
        "contrasena" : user.contrasena,
        "nombre" : user.nombre,
        "correo" : user.correo,
        "direccion" : user.direccion,
        "foto" : user.foto,
        "formulario" : "usuario"
    };
    
    $.ajax({
        type: "POST",
        url: "enviarBaseDatos.php",
        data: persona,
       
    })
    .done(function(callback){
        alert(callback);
    })
}

function crearProducto(nombre,descripcion,precio,stock,categoria,foto){
    let producto= new Producto(nombre,descripcion,precio,stock,categoria,foto);
    $.ajax({
        type: "POST",
        url: "productos.php?formulario=producto",
        data: JSON.stringify(producto),
        success: function(){
            alert("Producto enviado")
        },
        error : function(){
            alert("Error al enviar el producto")
        }
    });
}
