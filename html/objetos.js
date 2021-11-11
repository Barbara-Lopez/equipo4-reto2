function Producto(){
    this.nombre=monbnombre;
    this.descripcion=descripcion;
    this.precio=precio;
    this.stock=stock;
    this.categoria=categoria;
    this.foto=foto;
}
function Usuario(){
    this.nif=nif;
    this.contrasena=contrasena;
    this.nombre=nombre;
    this.correo=correo;
    this.direccion=direccion;
    this.foto=foto;
}

function crearUsuario(nif,contrasena,nombre,correo,direccion,foto){
    let persona= new Usuario(nif,contrasena,nombre,correo,direccion,foto);
    $.ajax({
        type: "GET",
        url: "registro.php",
        data: "datos=" + persona,
        success= alert("Usuario enviado"),
    });
}
