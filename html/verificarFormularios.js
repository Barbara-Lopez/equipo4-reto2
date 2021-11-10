
$(document).ready(
    function (){
            $('#enviar').click(function(event){
                
                if($('form').attr('id')=="formUsuario"){
                    boton="usuario";
                }else{
                    boton="producto"
                }                 
                
                verificarDatos(boton);
            });
        
});

function verificarDatos(boton){
    
    if(boton=="usuario"){
        nif=verificarNif();
        contrasena=verificarContrasena();
        nombre=verificarNombre();
        correo=verificarCorreoElectronico();
        direccion=verificarDireccion();
        foto=$('#foto').val();
    } else{
        nombre=verificarNombre();
        descripcion=$('descripcion').val();
        precio=verificarPrecio();
    }
    
}

function verificarNombre(){
    try {
        nombre=$('#nombre').val();
        reg=new RegExp("^[0-9a-zA-Z]*$");

        if(reg.test(nombre))
            return nombre;
        else
            throw "Nombre mal escrito vuelva a escribirlo"
        
    } catch (error) {
        alert(error)
    }
}

function verificarContrasena(){
    try {
        c1=$('#contrasena1').val();
        c2=$('#contrasena2').val();

        if(c1==c2)
            return c1;
        else
            throw "Las contraseñas son distintas vuelva a escribirlas"
        
    } catch (error) {
        alert(error)
    }
}

function verificarNif(){
    try {
        nif=$('#nif').val();
        reg=new RegExp("^[0-9]{8}[A-Z]{1}$");

        if(reg.test(nif))
            return nif;
        else
            throw "Nif mal escrito vuelva a escribirlo";
        
    } catch (error) {
        alert(error)
    }
}

function verificarCorreoElectronico(){
    try {
        correo=$('#correo').val();
        reg=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");

        if(reg.test(correo))
            return correo;
        else
            throw "El correo esta mal escrito vuelva a escribirlo";
        
    } catch (error) {
        alert(error)
    }
}

function verificarDireccion(){
    try {
        direccion=$('#direccion').val();
        reg=new RegExp("^[a-zA-Z]*,[a-zA-Z]*$");

        if(reg.test(direccion))
            return direccion;
        else
            throw "La dirección esta mal escrita vuelva a escribirlo";
        
    } catch (error) {
        alert(error)
    }
}

function verificarPrecio(){
    try {
        precio=$('#precio').val();
        reg=new RegExp("^[0-9]+([,][0-9]+)?$");

        if(reg.test(precio))
            return precio;
        else
            throw "El precio esta mal escrito vuelva a escribirlo";
        
    } catch (error) {
        alert(error)
    }
}
