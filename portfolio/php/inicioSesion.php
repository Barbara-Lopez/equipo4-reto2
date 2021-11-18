<?php
$user="rober";
$pass="pass";
    if(isset($_POST["username"]) && isset($_POST["pass"])){
        //consulta sql para recibir user y pass
        $username=$_POST["username"];
        $password=$_POST["pass"];
        $password=hash('sha256', $password);
        if($username==$user && $pass==$password){
            $token = hash('sha256', time()+$username);
            $expiracion = time() + 60 * 30;
            setcookie("SESION", $token, $expiracion);
            //sentencia sql para mandar token a la bd
            echo "Bienvenid@ " . $username;
        }
        else{
            echo "Contraseña o usuario incorrectos";
        }
    }
    else{
        echo "Ha ocurrido un problema al logearse";
    }
?>