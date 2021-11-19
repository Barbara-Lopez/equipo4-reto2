<?php 

require 'conexionBBDD.php';
    
    $formulario=$_POST["formulario"];
    if($formulario=="usuario"){
        crearUsuario();
    }else{
        crearProducto();
    }


function crearUsuario(){
    $datos= array(
        'nombreUsuario'=> $_POST["nombreUsuario"],
        'contrasena'=> $_POST["contrasena"],
        'nombre'=>$_POST["nombre"],
        'correo'=>$_POST["correo"],
        'telefono'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
        
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO usuario (nombreusu,contrasenausu,nombre,gmail,tlfno,direccion) VALUES (:nombreUsuario,:contrasena,:nombre,:correo,:telefono,:direccion)");
    $stmt->execute($datos);
    $dbh=close();
    
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
    
}

function enviarImg(){
    if(isset($_POST["foto"])){
        
        foreach ($_FILES['image']['name'] as $key => $value){
            print_r($_FILES['image']['name'][$key]);
       
            if ( $_FILES['image']['name'][$key]) {
                
                $image = $_FILES['image']['tmp_name'][$key]; 
                $revisar = getimagesize($image);
                if($revisar !== false){
                    $nombre_inagen=$_FILES['image']['name'][$key];
                    $tipo_inagen = $_FILES['image']['type'][$key];
                    echo $tipo_inagen;
                    $tamano_inagen = $_FILES['image']['size'][$key];
                    //ruta de la carpeta destino del server
    
                    //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
                    // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
                    
                    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/imagenes/';
                    $imgContenido = addslashes(file_get_contents($image));
    
                    move_uploaded_file($image,$carpeta_destino.$nombre_inagen);
                    
                    //Crear conexion con la abse de datos
                    $db = connect();
    
                    
                    //Insertar imagen en la base de datos
                    $insertar = $db->query("INSERT into images_tabla (imagenes, creado) VALUES ('$imgContenido', now())");
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
}

    