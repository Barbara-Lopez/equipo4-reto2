function Producto(nombre,descripcion,precio,stock,categoria,foto){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.precio=precio;
    this.stock=stock;
    this.categoria=categoria;
    this.foto=foto;
    this.fecha=date;
}
function Usuario(nif,contrasena,nombre,correo,telefono,direccion,foto){
    this.nif=nif;
    this.contrasena=contrasena;
    this.nombre=nombre;
    this.correo=correo;
    this.telefono=telefono;
    this.direccion=direccion;
    this.foto=foto;
}

function crearUsuario(nif,contrasena,nombre,correo,telefono,direccion,foto){
    let user= new Usuario(nif,contrasena,nombre,correo,telefono,direccion,foto);
    let persona= {
        "nif" : user.nif,
        "contrasena" : user.contrasena,
        "nombre" : user.nombre,
        "correo" : user.correo,
        "telefono" : user.telefono,
        "direccion" : user.direccion,
        "foto" : user.foto,
        "formulario" : "usuario"
    };
    
    $.ajax({
        type: "POST",
        url: "enviarBaseDatos.php",
        data: persona,
       
    })
    .done(function(){
        alert("Enviado correctamente");
    })
}

function crearProducto(nombre,descripcion,precio,stock,categoria,foto,date){
    let p= new Producto(nombre,descripcion,precio,stock,categoria,foto,date);
    let producto= {
        "nombre" : p.nombre,
        "descripcion" : p.descripcion,
        "precio" : p.precio,
        "stock" : p.stock,
        "categoria" : p.categoria,
        "foto" : p.foto,
        "fecha" : p.fecha,
        "formulario" : "producto"
    };
    $.ajax({
        type: "POST",
        url: "productos.php",
        data: producto,
    })
    .done(function(){
        alert("Enviado correctamente");
    })
}
