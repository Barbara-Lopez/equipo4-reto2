<?php
    if(isset($_COOKIE["SESION"])){
        $activa = 0;
        $activa = 1;/* select 1 from USERS where sesion_token == $_COOKIE["SESION"]*/
        echo $activa;
    }
    else{
        echo "Debes de iniciar sesion para continuar...";
    }

?>