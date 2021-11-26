<?php
require '../conexionbd.php';

$dbh=connect();
$stmt= $dbh->prepare("SELECT * FROM imagen");
$stmt->execute();
$resultado2 = $stmt->fetchAll(PDO::FETCH_ASSOC);
$dbh=close();
$arrayImg=$resultado2;

$dbh=connect();
$stmt= $dbh->prepare("SELECT * FROM producto");
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
$dbh=close();
$arrayProductos=[];

foreach ($resultado as $row){
    $idproducto=$row["idproducto"];
    $titulo=$row["titulo"];
    $descripcion=$row["descripcion"];
    $localidad=$row["localidad"];
    $precio=$row["precio"];
    $stock=$row["stock"];
    $imagenfoto="";
    foreach($arrayImg as $id){
        if($id['idproducto']==$idproducto){
            $imagenfoto=$id['idproducto'];
            break;
        }
    }
    $array=[
        'idproducto'=>$idproducto,
        'titulo'=>$titulo,
        'descripcion'=>$descripcion,
        'localidad'=>$localidad,
        'precio'=>$precio,
        'stock'=>$stock,
        'imagenfoto'=>$imagenfoto
    ]; 
    
    array_push($arrayProductos,$array);
};

echo json_encode($arrayProductos); 
?>

