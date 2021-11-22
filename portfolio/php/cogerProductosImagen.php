<?php
require 'conexionBBDD.php';

$dbh=connect();
$stmt= $dbh->prepare("SELECT p.*, i.imagenfoto, u.direccion FROM producto p, imagen i, usuario u where i.usuario_idusu=p.idproducto and i.usuario_idusu=u.idusu");
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
$dbh=close();
$arrayUsuarios=$resultado;
echo json_encode($arrayUsuarios); 

?>