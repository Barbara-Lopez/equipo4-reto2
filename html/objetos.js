function Producto(){
    this.nombre=monbnombre;
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
    let persona= new Usuario(nif,contrasena,nombre,correo,direccion,foto);
    $.ajax({
        type: "POST",
        url: "registro.php",
        data: "datos=" + JSON.stringify(persona),
        success: function(){
            alert("Usuario enviado")
        },
        error : function(){
            alert("Error al enviar el usuario")
        }
    });
    /* $.post('registro.php',{})*/
}
