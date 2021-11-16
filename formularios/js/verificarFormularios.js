
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
    try {
        if(formulrio=="usuario"){
            nif=verificarNif();
            contrasena=verificarContrasena();
            nombre=verificarNombre();
            correo=verificarCorreoElectronico();
            telefono=verificarTelefono();
            direccion=verificarDireccion();
            foto=$('#foto').val();
            crearUsuario(nif,contrasena,nombre,correo,telefono,direccion,foto);
        } else{
            nombre=verificarNombre();
            descripcion=verificarDescripcion();
            precio=verificarPrecio();
            stock=$('#stock').val();
            categoria=verificarCategoria();
            foto=$('#foto').val();
            date=new Date (2000,02,22);      
            console.log(date);
            crearProducto(nombre,descripcion,precio,stock,categoria,foto);
        }
    } catch (error) {
        errores(error);
     
        
    }
}

function verificarNombre(){
    nombre=$('#nombre').val();
    reg=new RegExp("^[0-9a-zA-Z]*$");

    if(reg.test(nombre))
        return nombre;
    else
        throw "Nombre esta mal escrito o vacio, vuelva a escribirlo"
}

function verificarContrasena(){
    c1=$('#contrasena1').val();
    c2=$('#contrasena2').val();
    if(c1=="" && c2==""){
        throw "contrasena1"
    }
    else{
        if(c1==c2)
            return c1;
        else
            throw "contrasena2"
    }
}

function verificarNif(){
    nif=$('#nif').val();
    reg=new RegExp("^[0-9]{8}[A-Z]{1}$");

    if(nif==""){
        throw "nif1"
    }
    else{
        if(reg.test(nif))
            return nif;
        else
            throw "nif2";
    }
}

function verificarCorreoElectronico(){
    correo=$('#correo').val();
    reg=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");

    if(correo==""){
        throw "El correo esta vacio";
    }
    else{ 
        if(reg.test(correo))
            return correo;
        else
            throw "El correo esta mal escrito vuelva a escribirlo";
    }
}

function verificarTelefono(){
    telefono=$('#tel').val();
    reg=new RegExp("^[0-9]{9}$");

    if(telefono==""){
        throw "El telefono esta vacio";
    }
    else{    
        if(reg.test(telefono))
            return telefono;
        else
            throw "Telefono mal escrito vuelva a escribirlo";
    }
    
}

function verificarDireccion(){
    direccion=$('#direccion').val();
    reg=new RegExp("^[a-zA-Z]*,[a-zA-Z]*$");

    if(direccion==""){
        throw "La dirección esta vacia";
    }
    else{
        if(reg.test(direccion))
            return direccion;
        else
            throw "La dirección esta mal escrita vuelva a escribirlo";
    }
}

function verificarPrecio(){
    precio=$('#precio').val();
    reg=new RegExp("^[0-9]+([,][0-9]+)?$");

    if(precio==""){

    }
    else{
        if(reg.test(precio))
        return precio;
        else
            throw "El precio esta mal escrito vuelva a escribirlo"; 
    }    
}

function verificarDescripcion(){
    descripcion=$('#descripcion').val();
    if(descripcion==""){
        throw "La descripción no se puede dejar vacía";
        
    }else{
        return descripcion;
        }

}  

function verificarCategoria(){
    categoria=$('.categoria').val();
    if(categoria==""){
        throw "No esta metido en ninguna categoria"
    }else{
        categorias=categoria.split(',');
        return categorias;
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

function errores(error) {
    
    switch (error) {
        case "nif1":
            $('#nif').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "nif2":
            $('#nif').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        /*case "nif1":
            $('#nif').notify(texto,{position: posicion,className: tipo });
            break;
        case "nif2":
            $('#nif').notify(texto,{position: posicion,className: tipo });
            break;*/
        default:
            break;
    }
} 

