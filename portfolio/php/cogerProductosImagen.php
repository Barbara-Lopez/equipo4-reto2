<?php
require 'conexionBBDD.php';

$dbh=connect();
$stmt= $dbh->prepare("SELECT p.*, i.imagenfoto, u.direccion FROM producto p, imagen i, usuario u where i.usuario_idusu=p.idproducto and i.usuario_idusu=u.idusu");
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
$dbh=close();
$arrayUsuarios=$resultado;
/*foreach ($resultado as $row){
    $idusu=$row["idusu"];
    $nombreusu=$row["nombreusu"];
    $contrasenausu=$row["contrasenausu"];
    $nombre=$row["nombre"];
    $gmail=$row["gmail"];
    $telefono=$row["tlfno"];
    $direccion=$row["direccion"];
    $array=[
        $idusu =>[
            'nombreUsuario'=>$nombreusu,
            'contrasena'=>$contrasenausu,
            'nombre'=>$nombre,
            'gmail'=>$gmail,
            'telefono'=>$telefono,
            'direccion'=>$direccion
        ]
    ];
    array_push($arrayUsuarios,$array);
};*/
echo json_encode($arrayUsuarios); 

?>