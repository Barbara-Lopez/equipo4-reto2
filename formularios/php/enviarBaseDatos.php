<?php 

function connect(){
    try {
        # MySQL
        $dbh= new PDO("mysql:host=127.0.0.1:8889;dbname=retotrebureus", "root", "root");
        return $dbh;
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
}
function close(){
    $dbh=null;
    return $dbh;
}
    
    $formulario=$_POST["formulario"];
    if($formulario=="usuario"){
        crearUsuario();
    }else{
        crearProducto();
    }


function crearUsuario(){
    $datos= array(
        'nif'=> $_POST["nif"],
        'contrasena'=> $_POST["contrasena"],
        'nombre'=>$_POST["nombre"],
        'correo'=>$_POST["correo"],
        'telefono'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
        
    $dbh=connect();
    $stmt= $dbh->prepare("INSERT INTO usuario (nombreusu,contrasenausu,nombre,gmail,tlfno,direccion) VALUES (:nif,:contrasena,:nombre,:correo,:telefono,:direccion)");
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


    