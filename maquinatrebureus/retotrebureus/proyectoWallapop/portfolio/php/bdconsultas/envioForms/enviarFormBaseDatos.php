<?php 

//require '../conexionbd.php';
require_once '../usuarios/comprobarSesion.php';
require_once '../productos/producto.php';
    
    $formulario=$_POST["formulario"];
    if($formulario=="usuario"){
        crearUsuario();
    }else{
        crearProducto();
    }


function crearUsuario(){
    $contrasena=hash("sha256",$_POST["contrasena"]);
    echo $contrasena;
    $datos= array(
        'nombreUsuario'=> $_POST["nombreUsuario"],
        'contrasena'=> $contrasena,
        'nombre'=>$_POST["nombre"],
        'correo'=>$_POST["correo"],
        'telefono'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
    enviarImg();   
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO usuario (nombreusu,contrasenausu,nombre,gmail,tlfno,direccion) VALUES (:nombreUsuario,:contrasena,:nombre,:correo,:telefono,:direccion)");
    $stmt->execute($datos);
    $dbh=close();
    
}

function crearProducto(){
    
    // meter lo necesario para la cookie
    $infoSesion=comprobarSesionPHP(); //no se controla nada...
    $idUsuario=$infoSesion["idusu"];
   
    
    $datos= array(
        'nombre'=>$_POST["nombre"],
        'descripcion'=> $_POST["descripcion"],
        'precio'=>$_POST["precio"],
        'stock'=>$_POST["stock"],
        'localidad'=>$_POST["localidad"],
        'idUsuario'=>$idUsuario
    );
    
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO producto (titulo,descripcion,precio,stock,localidad,usuariosubido) VALUES (:nombre,:descripcion,:precio,:stock,:localidad,:idUsuario)");
    $stmt->execute($datos);
    $dbh=close();
    enviarImg();
}


function enviarImg(){
    if (isset($_FILES['imgusu'])) {
        $image = $_FILES['imgusu']['tmp_name']; 
        $nombre_inagen=$_FILES['imgusu']['name'];
        $tipo_inagen = $_FILES['imgusu']['type'];
        echo $tipo_inagen;
       //ruta de la carpeta destino del server
        //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
        // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
        $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/imagenes/';
        //Crear conexion con la abse de datos
        //Insertar imagen en la base de datos
        $ficha= array(
            'archivo'=> $nombre_inagen
        );
        $dbd=connect();
        $insertar = $dbd->prepare("INSERT into imagen (imagenfoto) VALUES (:archivo)");
        $insertar->execute($ficha);
        $dbd=close();
        // COndicional para verificar la subida del fichero
        move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
    }
    elseif (isset($_FILES['imgpro'])) {
            print_r($_FILES['imgpro']['name']);
       
            if ($_FILES['imgpro']['name']) {
                
                $image = $_FILES['imgpro']['tmp_name']; 
                    $nombre_inagen=$_FILES['imgpro']['name'];
                    $tipo_inagen = $_FILES['imgpro']['type'];
                    echo $tipo_inagen;
                   //ruta de la carpeta destino del server
    
                    //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
                    // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
                    $idProducto=buscaridmaxprod();
                    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/imagenes/';
    
                    move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
                    
                    //Crear conexion con la abse de datos
                    $dbd = connect();
                    //Insertar imagen en la base de datos

                    $insertar = $dbd->prepare("INSERT into imagen (imagenfoto, producto_idproducto) VALUES ('$nombre_inagen',$idProducto)");
                    $insertar->execute();
                    // COndicional para verificar la subida del fichero
                    if($insertar){
                        echo "Archivo Subido Correctamente.";
                        echo $nombre_inagen;
                        echo"<br/>";
                    }
                    else{
                        echo "Ha fallado la subida, reintente nuevamente.";
                    } 
                    // Si el usuario no selecciona ninguna imagen
            }
                else{
                    echo "Por favor seleccione imagen a subir.";
                }
            
        
    
}
}