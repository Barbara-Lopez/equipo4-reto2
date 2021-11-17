
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
            $('.usuario').val("");
            
        } else{
            nombre=verificarNombre();
            descripcion=verificarDescripcion();
            precio=verificarPrecio();
            stock=verificarStock();
            foto=verificarFoto();
            categoria=verificarCategoria();
            date=new Date (2000,02,22);      
            crearProducto(nombre,descripcion,precio,stock,categoria,foto,date);
            $('.producto').val("");
        }
    } catch (error) {
        errores(error);
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

function verificarNombre(){
    nombre=$('#nombre').val();
    reg=new RegExp("^[0-9a-zA-Z]*$");

    if (nombre=="") {
        throw "nombre1"
    } else {
        if(reg.test(nombre))
            return nombre;
        else
            throw "nombre2"
    }
}

function verificarContrasena(){
    c1=$('#contrasena1').val();
    c2=$('#contrasena2').val();
    reg=new RegExp("^[0-9a-zA-Z]{5,10}$");
    if(c1==""){
        throw "contrasena1"
    }
    else{
        if(c2==""){
            throw "contrasena2"
        }
        else{
            if(c1==c2){
                if(reg.test(c1) && reg.test(c2)){
                    return c1;
                }
                else{
                    throw "contrasena4"
                }
            }
            else
                throw "contrasena3"
        }
    }
}

function verificarCorreoElectronico(){
    correo=$('#correo').val();
    reg=new RegExp("^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");

    if(correo==""){
        throw "correo1";
    }
    else{ 
        if(reg.test(correo))
            return correo;
        else
            throw "correo2";
    }
}

function verificarTelefono(){
    telefono=$('#tel').val();
    reg=new RegExp("^[0-9]{9}$");

    if(telefono==""){
        throw "telefono1";
    }
    else{    
        if(reg.test(telefono))
            return telefono;
        else
            throw "telefono2";
    }
    
}

function verificarDireccion(){
    direccion=$('#direccion').val();
    reg=new RegExp("^[a-zA-Z]*,[a-zA-Z]*$");

    if(direccion==""){
        throw "direccion1";
    }
    else{
        if(reg.test(direccion))
            return direccion;
        else
            throw "direccion2";
    }
}

function verificarPrecio(){
    precio=$('#precio').val();
    reg=new RegExp("^[0-9]+([,][0-9]+)?$");

    if(precio==""){
        throw "precio1"
    }
    else{
        if(reg.test(precio))
        return precio;
        else
            throw "precio2"; 
    }    
}

function verificarDescripcion(){
    descripcion=$('#descripcion').val();
    if(descripcion==""){
        throw "descripcion";
        
    }else{
        return descripcion;
    }
} 

function verificarFoto(){
    foto=$('#foto').val();
    if(foto==""){
        throw "foto";
        
    }else{
        return foto;
    }
} 
function verificarStock(){
    stock=$('#stock').val();
    if(stock==""){
        throw "stock";
        
    }else{
        return stock;
    }
} 

function verificarCategoria(){
    categoria=$('.categoria').val();
    if(categoria==""){
        throw "categoria"
    }else{
        categorias=categoria.split(',');
        return categorias;
    }        
}

function guardarCategoria(){
    let categoria =$("#categoria option:selected").val();

    let hidden=$('.categoria');
        if(hidden.val()==""){
            hidden.val(categoria);
        } 
        else{
            hidden.val(hidden.val()+","+categoria);
        }
        texto="Categoria: "+hidden.val()
        $('#enviarCategoria').notify(texto,{position: "right",className: "none" });
}

function errores(error) {
    
    switch (error) {
        case "nif1":
            $('#nif').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "nif2":
            $('#nif').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "nombre1":
            $('#nombre').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "nombre2":
            $('#nombre').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "contrasena1":
            $('#contrasena1').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "contrasena2":
            $('#contrasena2').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "contrasena3":
            $('#contrasena1').notify("Las contraseñas no coinciden",{position: "right",className:"error" });
            break;
        case "contrasena4":
            $('#contrasena1').notify("La contraseña tiene que tener una longitud de minimo de 5 y maximo de 10",{position: "right",className: "info"});
            break;
        case "correo1":
            $('#correo').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "correo2":
            $('#correo').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "telefono1":
            $('#tel').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "telefono2":
            $('#tel').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "direccion1":
            $('#direccion').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "direccion2":
            $('#direccion').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "precio1":
            $('#precio').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "precio2":
            $('#precio').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
            break;
        case "descripcion":
            $('#descripcion').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "categoria":
            $('#categoria').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "foto":
            $('#foto').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "stock":
            $('#stock').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        default:
            break;
    }
} 
