<?php
require 'conexionBBDD.php';

$dbh=connect();
$stmt= $dbh->prepare("SELECT p.*, i.imagenfotoFROM producto p, imagen i where i.usuario_idusu=p.idproducto ");
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
$dbh=close();
$arrayUsuarios=$resultado;
echo json_encode($arrayUsuarios); 

?>