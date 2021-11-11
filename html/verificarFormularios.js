
$(document).ready(
    function (){
            $('#enviar').click(function(event){
                
                if($('form').attr('id')=="formUsuario"){
                    formulrio="usuario";
                }else{
                    formulrio="producto";
                }                 
                
                verificarDatos(formulrio);
            });
            $('#enviarCategoria').click(function(){
                guardarCategoria();
               
            });
        
});

function verificarDatos(formulrio){
    
    if(formulrio=="usuario"){
        nif=verificarNif();
        contrasena=verificarContrasena();
        nombre=verificarNombre();
        correo=verificarCorreoElectronico();
        direccion=verificarDireccion();
        foto=$('#foto').val();
        crearUsuario(nif,contrasena,nombre,correo,direccion,foto);
    } else{
        nombre=verificarNombre();
        descripcion=verificarDescripcion();
        precio=verificarPrecio();
        stock=$('#stock').val();
        categoria=verificarCategoria();
        foto=$('#foto').val();
    }
    
}

function verificarNombre(){
    try {
        nombre=$('#nombre').val();
        reg=new RegExp("^[0-9a-zA-Z]*$");

        if(reg.test(nombre))
            return nombre;
        else
            throw "Nombre esta mal escrito o vacio, vuelva a escribirlo"
        
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

function verificarDescripcion(){
    try {
        descripcion=$('#descripcion').val();
        if(descripcion==""){
            throw "La descripción no se puede dejar vacía";
            
        }else{
            return descripcion;
        }
            
           
        
    } catch (error) {
        alert(error)
    }
}  

function verificarCategoria(){
    try {
        categoria=$('.categoria').val();
        if(categoria==""){
            throw "No esta metido en ninguna categoria"
        }else{
            categorias=categoria.split(',');
            return categorias;
        }        
    } catch (error) {
        alert(error)
    }
}
function guardarCategoria(){
    
    let categoria =$("#categoria option:selected").val();

    let hidden=$('.categoria');
        if(hidden.val()=="")
             hidden.val(categoria);
        else
            hidden.val(hidden.val()+","+categoria);  
            
        alert(hidden.val());
}


