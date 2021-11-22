<?php
   require "conexionbd.php";
   function cargar(){
    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/carpetaimagen/';
    //Crear conexion mysql
    $db = connect();
    //Extraer ultima imagen de la BD mediante GET
    $result = $db->query("SELECT id, imagenes FROM images_tabla WHERE id =(SELECT max(id) FROM images_tabla)");
    if($result->rowCount()> 0){
        
        echo "imagen existe" ; 
        while($imgDatos = $result->fetch()) {
            ;
            $archivo =$imgDatos['imagenes'];
            $codigo =$imgDatos['id'];
            $servid=$_SERVER['HTTP_HOST'];
        echo "<img src='../$servid/carpetaimagen/$archivo'>";
            //Mostrar Imagen
        /*    
        echo "<br/>";    
        echo "<img src='../carpetaimagen/$archivo'>";
        unlink($carpeta_destino.$imgDatos['imagenes']);
        echo "<img src='../carpetaimagen/$archivo'>";

        $consulta = $db->query("DELETE FROM images_tabla WHERE id = $codigo");*/
        }
        
    }else{
        echo 'Imagen no existe...';
    }
}
   
?>