<?php
require_once("../conexionbd.php");
function comprobarCredenciales($user, $pass){
    $db= connect();
    $stmt = $db->prepare("SELECT nombreusu, contrasenausu FROM usuario WHERE nombreusu = :nombreusuario");
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $data=array('nombreusuario' => $user);
    $stmt->execute($data); 
    $credenciales=$stmt->fetch();
    $db= close(); 
    $realUser=$credenciales["nombreusu"];
    $realPass=$credenciales["contrasenausu"];
    $password=hash('sha256', $pass);
    if($realUser==$user && $password==$realPass){
        return true;
    }
    return false;
}
    

function insertarTokenSesion($nombreUsu, $token, $expiracionToken){
    try{
        $db= connect();
        $stmt = $db->prepare("REPLACE INTO sesiones (token, exptoken, idusu) VALUES (:token, :expsesion, (SELECT idusu from usuario where nombreusu=:nombreusu))");
        $data=array('token' => $token, 'expsesion' => $expiracionToken, 'nombreusu' => $nombreUsu); //'expsesion' => $expiracionToken);
        $stmt->execute($data);
        $db= close();
        
    }catch(Exception $e){
        echo $e->getMessage();
    }
    
}

