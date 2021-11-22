<?php 

require 'conexionBBDD.php';
    
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
        
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO usuario (nombreusu,contrasenausu,nombre,gmail,tlfno,direccion) VALUES (:nombreUsuario,:contrasena,:nombre,:correo,:telefono,:direccion)");
    $stmt->execute($datos);
    $dbh=close();
    enviarImg();
}

function crearProducto(){
    $datos= array(
        'nombre'=>$_POST["nombre"],
        'descripcion'=> $_POST["descripcion"],
        'precio'=>$_POST["precio"],
        'stock'=>$_POST["stock"]
    );
        
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO producto (titulo,descripcion,precio,stock) VALUES (:nombre,:descripcion,:precio,:stock)");
    $stmt->execute($datos);
    $dbh=close();
    enviarImg();
}

function enviarImg(){
        
        foreach ($_FILES['foto']['name'] as $key => $value){
            print_r($_FILES['foto']['name'][$key]);
       
            if ( $_FILES['foto']['name'][$key]) {
                
                $image = $_FILES['foto']['tmp_name'][$key]; 
                $revisar = getimagesize($image);
                if($revisar !== false){
                    $nombre_inagen=$_FILES['foto']['name'][$key];
                    $tipo_inagen = $_FILES['foto']['type'][$key];
                    echo $tipo_inagen;
                    $tamano_inagen = $_FILES['foto']['size'][$key];
                    //ruta de la carpeta destino del server
    
                    //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
                    // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
                    
                    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/imagenes/';
    
                    move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
                    
                    //Crear conexion con la abse de datos
                    $db = connect();
    
                    
                    //Insertar imagen en la base de datos
                    $insertar = $db->query("INSERT into imagen (imagenfoto) VALUES ('$nombre_inagen')");
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
    
}

    