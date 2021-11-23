<?php 

require 'conexionBBDD.php';
    
      
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
    


    