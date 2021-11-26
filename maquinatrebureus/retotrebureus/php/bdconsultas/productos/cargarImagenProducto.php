<?php
   require "../conexionbd.php";
   
    if(isset($_GET['id'])){
        $id=$_GET['id'];
        //Crear conexion mysql
        $db = connect();
        //Extraer ultima imagen de la BD mediante GET
        $result = $db->query("SELECT idfotos, imagenfoto FROM imagen WHERE producto_idproducto=$id");
        $imgDatos = $result->fetch();
        $archivo =$imgDatos['imagenfoto'];
        $codigo =$imgDatos['idfotos'];
        $servid=$_SERVER['HTTP_HOST'];//tambien vale la carpeta destino que tiene el documentroot
        $ruta='http://'.$servid.'/imagenes/'.$archivo;
        echo "<img src='$ruta' />";
    }else{
        echo "no id";
    }
            

       
    ?>