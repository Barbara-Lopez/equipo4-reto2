
<?php
    $datosUser=$_POST["datos"];
   
    $array = json_decode($datosUser, true); 
    echo $datosUser;
require 'registro.php';
