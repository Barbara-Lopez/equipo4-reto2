<?php
require_once("producto.php");
$patron=$_POST["patron"];
echo selectLikeProductos($patron);
?>