<?php
require_once("funcionesSesion.php");
    if(isset($_POST["username"]) && isset($_POST["pass"])){
        $user=$_POST["username"];
        $pass=$_POST["pass"];
        if(comprobarCredenciales($user, $pass)){
            $token = hash('sha256', time());
            $expiracion = time() + (60*30); //se le añade media hora a la fecha limite 
            insertarTokenSesion($user, $token, $expiracion);  
            $mensaje= "Bienvenid@ " . $user;
            $infoSesion= array("token" => $token, "expiracion" => $expiracion, "msg" => $mensaje);
            $info=json_encode($infoSesion);
            echo $info;
        }
        else{
            $msg = "Contraseña o usuario incorrectos";
            $infoSesion= array("msg" => $msg);
            echo json_encode($infoSesion);
        }
    }
    else{
        $msg = "Ha ocurrido un problema al logearse";
        $infoSesion= array("msg" => $msg);
        echo json_encode($infoSesion);
    }
?>