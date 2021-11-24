<?php 

require 'conexionBBDD.php';
    
    //$formulario=$_POST["formulario"];
    /*echo $formulario;
    if($formulario=="usuario"){
       */ crearUsuarios();
    /*}else{
        crearProducto();
    }*/


function crearUsuarios(){
    $datos= array(
        'nombreUsuario'=>$_POST["nombreUsuario"],
        'contrasena'=> $_POST["contrasena"],
        'nombre'=>$_POST["nombre"],
        'correo'=>$_POST["correo"],
        'telefono'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
    //enviarImg();
    $dbh=connect();
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
        $dbs=close();
        // COndicional para verificar la subida del fichero
        move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
    }
    $stmt= $dbh->prepare("INSERT INTO usuario (nombreusu,contrasenausu,nombre,gmail,tlfno,direccion) VALUES (:nombreUsuario,:contrasena,:nombre,:correo,:telefono,:direccion)");
    $stmt->execute($datos);
    $dbh=close();

}

function crearProducto(){
    
    // meter lo necesario para la cookie
    
    
    $datos= array(
        'nombre'=>$_POST["nombre"],
        'descripcion'=> $_POST["descripcion"],
        'precio'=>$_POST["precio"],
        'stock'=>$_POST["stock"],
        'localidad'=>$_POST["localidad"],
        'idUsuario'=>1
    );
    
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO producto (titulo,descripcion,precio,stock,localidad,usuariosubido) VALUES (:nombre,:descripcion,:precio,:stock,:localidad,:idUsuario)");
    $stmt->execute($datos);
    $dbh=close();
    //enviarImg();
}

function enviarImg(){
        foreach ($_FILES['imgusu']['name'] as $key ){
            print_r($_FILES['imgusu']['name'][$key]);
       
            if ($_FILES['imgusu']['name'][$key]) {
                
                $image = $_FILES['imgusu']['tmp_name'][$key]; 
                    $nombre_inagen=$_FILES['imgusu']['name'][$key];
                    $tipo_inagen = $_FILES['imgusu']['type'][$key];
                    echo $tipo_inagen;
                   //ruta de la carpeta destino del server
    
                    //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
                    // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
                    
                    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/imagenes/';
    
                    move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
                    
                    //Crear conexion con la abse de datos
                    $dbd = connect();
                    //Insertar imagen en la base de datos

                    $insertar = $dbd->prepare("INSERT into imagen (imagenfoto, usuario_idusu) VALUES ('$nombre_inagen','10')");
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

    