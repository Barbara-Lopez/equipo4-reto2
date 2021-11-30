
$(document).ready(
    function (){
            $('#enviar').click(function(event){
                if($('form').attr('id')=="formUsuario"){
                    formulario="usuario";
                }else{
                    formulario="producto";
                }                 
                verificarDatos(formulario);
            });
            $('#enviarCategoria').click(function(event){
                guardarCategoria();
            });
            $('#eliminarCategoria').click(function(event){
                $('#categorias').val("");
                if( $('#categorias').val()==""){
                    $('#eliminarCategoria').notify("Categoria eliminada",{position: "right",className: "none" });
                } 
            });
        
});

function verificarDatos(formulario){
    try {
        form_data = new FormData()
        if(formulario=="usuario"){
            let imagen=$('#imgusu.usuario')[0].files[0];
            form_data.append('imgusu', imagen)
            form_data.append('formulario','usuario')
            form_data.append('nombreUsuario',verificarNombreUsuario());
            form_data.append('contrasena',verificarContrasena());
            form_data.append('nombre',verificarNombre());
            form_data.append('correo',verificarCorreoElectronico());
            form_data.append('telefono',verificarTelefono());
            form_data.append('direccion',verificarDireccion());
            //crearUsuario(form_data);
            for (var key of form_data.entries()) {
                console.log(key[0] + ', ' + key[1]);
            }
            $.ajax({
                url: "/proyectoWallapop/portfolio/php//bdconsultas/envioForms/enviarFormBaseDatos.php",
                dataType: 'json',
                cache : false,
                processData: false,
                contentType: false,
                data: form_data,
                type: "post",
                success: function(){
                    alert("ok");
                    $('.usuario').val("");
                },
                complete: function(e){
                    alert("Usuario registrado");
                }
            });
            $('.usuario').val("");  
        } else{
            let imagen=$("#imgprod")[0].files[0];
            let localidad=$("#localidad").val();
            form_data.append('imgpro', imagen);
            form_data.append('formulario','producto');
            form_data.append('nombre',verificarNombre());
            form_data.append('descripcion',verificarDescripcion());
            form_data.append('precio',verificarPrecio());
            form_data.append('stock',verificarStock());
            form_data.append('localidad', localidad);
            
            console.log(form_data);
            for (var key of form_data.entries()) {
                console.log(key[0] + ', ' + key[1]);
            }
            $.ajax({
                url: "/proyectoWallapop/portfolio/php/bdconsultas/envioForms/enviarFormBaseDatos.php",
                dataType: 'json',
                cache : false,
                processData: false,
                contentType: false,
                data: form_data,
                type: "POST",
                success: function(){
                   // alert("ok");
                   $('.productos').val("");
                },
                complete: function(e){
                    alert("Producto subido a la APP");
                    $('.productos').val("");
                }
            }); 
        }
    } catch (error) {
        errores(error);
    }
}

function verificarNombreUsuario(){
    nombreUsuario=$('#nombreUsuario').val();
    reg=new RegExp("^[A-Za-z0-9]*$");

    if(nombreUsuario==""){
        throw "nombreUsuario1"
    }
    else{
        if(reg.test(nombreUsuario))
            return nombreUsuario;
        else
            throw "nombreUsuario2";
    }
}

function verificarNombre(){
    nombre=$('#nombre').val();
    reg=new RegExp("^[A-Za-z0-9]*$");

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
    reg=new RegExp("^[1-9]{1}[0-9]{8}$");

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
    reg=new RegExp("^[a-zA-Z]+ [a-zA-Z]+$");

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
    foto=$('#foto');
    if(foto.val()==""){
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
    categoria=$('#categorias').val();
    if(categoria==""){
        categorias="otros";
        return categorias;
    }else{
        categorias=categoria.split(',');
        return categorias;
    }        
}

function guardarCategoria(){
    let categoria =$("#categoria option:selected").val();

    let hidden=$('#categorias');
        if(hidden.val()==""){
            hidden.val(categoria);
        } 
        else{
            hidden.val(hidden.val()+","+categoria);
        }
        texto="Categoria: "+hidden.val();
        $('#enviarCategoria').notify(texto,{position: "right",className: "none" });
}

function errores(error) {
    
    switch (error) {
        case "nombreUsuario1":
            $('#nombreUsuario').notify("No se puede dejar vacio",{position: "right",className: "warn" });
            break;
        case "nombreUsuario2":
            $('#nombreUsuario').notify("Mal escrito vuelva a escribirlo",{position: "right",className:"error" });
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

