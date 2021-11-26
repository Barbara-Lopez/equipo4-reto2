<?php
 require "conexionbd.php";
                
//insercion de imagen de un usuario en concreto
 function insimagenusu($idusu){
 
    $imgContenido = movimiento($_FILES['imgusu'],'',"insertar");
     //Crear conexion mysql
      $db= connect();
    $stmt = $db->prepare("INSERT INTO imagen ( imagenfoto,  usuario_idusu) VALUES ($imgContenido,  $idusu)");
      $stmt->execute();
      $db= close();
};
//insercion de imagenes de un producto en concreto
function insimagenprod($idprod){//idprod==>codigo del id
    foreach ($_FILES['imgprod']['name'] as  $key=> $value){
    $nombre_inagen=movimiento($_FILES['imgprod'],$key,'insertar');
    //implementacion de la base de datos
        //Crear conexion mysql
        $db= connect();
        $stmt = $db->prepare("INSERT INTO imagen ( imagenfoto, producto_idproducto) VALUES ($nombre_inagen, $idprod)");
        $stmt->execute();
        $db= close();
    }

};
//movimiento de imagenes de un usuario en concreto
function moverimagenusu($idusu){
    borrarimagenusu($idusu);
    insimagenusu($idusu);
};
//movimiento de imagenes de un producto en concreto
function moverimagenprod($idprod){
    borrarimagenprod($idprod);
    insimagenprod($idprod);
};
//borrado de imagenes de un usuario en concreto
function borrarimagenusu($id){
    $db= connect();
    $stmt = $db->prepare("SELECT FROM imagen WHERE  usuario_idusu=$id");
    $stmt->execute();
    while($resultado=$stmt->fetch()){
        movimiento($resultado['imagenfoto'],'',"eliminar");
    };
    $eliminacion=$db->prepare("DELETE FROM imagen WHERE  usuario_idusu=$id");
    $eliminacion->execute();
    $db= close();
};
//borrado de imagenes de un producto en concreto
function borrarimagenprod($id){
    $db= connect();
    $stmt = $db->prepare("SELECT FROM imagen WHERE  producto_idproducto=$id");
    $stmt->execute();
    while($resultado=$stmt->fetch()){
        movimiento($resultado['imagenfoto'],'',"eliminar");
    };
    $eliminacion=$db->prepare("DELETE FROM imagen WHERE  producto_idproducto=$id");
    $eliminacion->execute();
    $db= close();
};
 function buscaridmaximagen(){

    $db = connect();
    //Extraer ultima imagen de la BD mediante GET
    $result = $db->query("SELECT idfotos FROM imagen WHERE idfotos =(SELECT max(idfotos) FROM imagen");
    $result->execute();
    
    if($result->rowCount()> 0){
       $Datos = $result->fetch();
            $archivo =$Datos['idfotos'];
            return $archivo;
    }
    $db= close();
};
function obteneridprod(){

    $db = connect();
    //Extraer ultima imagen de la BD mediante GET
    $result = $db->query("SELECT idusu FROM usuario WHERE id =(SELECT max(id) FROM images_tabla");
    $result->execute();
    
    if($result->rowCount()> 0){
       $Datos = $result->fetch();
            $archivo =$Datos['idusu'];
            return $archivo;
    }
    $db= close();
};
function movimiento($foto,$llave,$estado){
    $carpeta_destino= $_SERVER['DOCUMENT_ROOT'].'/.carpetaimagen/';
    switch($estado){
        case 'insertar':
            if ($llave!='') {
                //mover imagen a la carpeta de la base de datos
                $image = $foto['tmp_name'][$llave]; 
                //ruta de la carpeta destino del server
                //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
                //$carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
                move_uploaded_file($image,$carpeta_destino.$foto['name'][$llave]);
                return $foto['name'][$llave];
            }
            else {
            //mover imagen a la carpeta de la base de datos
            $image = $foto['tmp_name']; 
            //ruta de la carpeta destino del server
            //$_SERVER['DOCUMENT_ROOT'] ==> /var/www/html (direccion original del localhost del servidor)
            // $carpeta_destino=$_SERVER['DOCUMENT_ROOT'].'/carpeta de guardado de archivos/';
            move_uploaded_file($image,$carpeta_destino.$foto['name']);
            return $foto['name'];
            }
        break;
        case 'eliminar':
                unlink($carpeta_destino.$foto);   
        break;
    }
}