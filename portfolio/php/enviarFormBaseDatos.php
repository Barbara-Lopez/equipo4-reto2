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


    