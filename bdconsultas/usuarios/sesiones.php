<?php
//control de sessiones (en segundos)
ini_set("session.cookie_lifetime","7200");
ini_set("session.gc_maxlifetime","7200");

function login(){
    $myusername = $_POST['usuario'];//obtencion de usuario
    $mypassword = $_POST['contrasena']; //obtencion de contrasena

    $db= connect();
    //buscamos todos los id de lps productos de la persona
    $stmt = $db->prepare("  SELECT idusu FROM usuario WHERE 
                            WHERE nombreusu = '$myusername' and contrasenausu = '$mypassword';
                        ");
   $stmt->execute();
   if ( $uns=$stmt->rowCount()!=0) {
    
        $_SESSION['trebureus'] = $uns['idusu'];
         
        //header("location: login.php");
    }else {
        echo'<script type="text/javascript">
        alert("inicio de session incorrecto");
        window.location.href="index.php";
        </script>';
   }
}

function logout(){
  unset($_SESSION['trebureus']);
  session_destroy();
  //header("location:login.php");
}
