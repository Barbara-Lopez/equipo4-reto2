<?php
   require "conexionbd.php";
   function cargar(){
    
    //Crear conexion mysql
    $db = connect();
    //Extraer ultima imagen de la BD mediante GET
    $result = $db->query("SELECT imagenes FROM images_tabla WHERE id =(SELECT max(id) FROM images_tabla");
    if($result->rowCount()> 0){
        
        echo "imagen existe" ; 
        while($imgDatos = $result->fetch()) {
            ;
            $archivo =$imgDatos['imagenes'];
            //Mostrar Imagen
            
        echo "<br/>";    
        echo "<img src='data:image/jpeg; base64,". base64_encode($archivo)."'>";
        
        }
        
    }else{
        echo 'Imagen no existe...';
    }
}
   
?>