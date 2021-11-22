function Producto(nombre,descripcion,precio,stock,categoria,imagen){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.precio=precio;
    this.stock=stock;
    this.categoria=categoria;
    this.imagen=imagen;
}
function Usuario(nombreUsuario,contrasena,nombre,correo,telefono,direccion,imagen){
    this.nombreUsuario=nombreUsuario;
    this.contrasena=contrasena;
    this.nombre=nombre;
    this.correo=correo;
    this.telefono=telefono;
    this.direccion=direccion;
    this.imagen=imagen;
}

function crearUsuario(nombreUsuario,contrasena,nombre,correo,telefono,direccion,imagen){
    let user= new Usuario(nombreUsuario,contrasena,nombre,correo,telefono,direccion,imagen);
    let persona= {
        "nombreUsuario" : user.nombreUsuario,
        "contrasena" : user.contrasena,
        "nombre" : user.nombre,
        "correo" : user.correo,
        "telefono" : user.telefono,
        "direccion" : user.direccion,
        "foto" : user.imagen,
        "formulario" : "usuario"
    };

    $.ajax({
        type: "POST",
        url: "enviarFormBaseDatos.php",
        data: persona,
    })
    .done(function(){
        alert("Enviado correctamente");
    }); 
}

function crearProducto(nombre,descripcion,precio,stock,categoria,imagen){
    let p= new Producto(nombre,descripcion,precio,stock,categoria,imagen);
    let producto= {
        "nombre" : p.nombre,
        "descripcion" : p.descripcion,
        "precio" : p.precio,
        "stock" : p.stock,
        "categoria" : p.categoria,
        "foto" : p.imagen,
        "formulario" : "producto"
    };

    $.ajax({
        type: "POST",
        url: "enviarFormBaseDatos.php",
        data: producto,
    })
    .done(function(){
        alert("Enviado correctamente");
    })
}
