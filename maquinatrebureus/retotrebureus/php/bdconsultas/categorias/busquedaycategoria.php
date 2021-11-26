<?php 
require "../conexionbd.php";
//buscar categoria
function buscartodacategoria(){
   $db= connect();
   //busar todas las categorias disponibles

   $stmt = $db->prepare("SELECT nombrecat FROM categoria");
   $stmt->execute();
   $db= close();   
   return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}



//buscar todas localidades
function buscartodalocalidad(){
   $db= connect();
   //busar todas las categorias disponibles

   $stmt = $db->prepare("SELECT DISTINCT localidad FROM producto");
   $stmt->execute();
   $db= close();   
   return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
//asignar producto categoria
function asignar_categoria($producto,$categorias){
   foreach ($categorias as  $categoria){
   $db= connect();
   //insertar producto en una categoria  disponibles
   $stmt = $db->prepare("  INSERT INTO lista_categoria (producto_idproducto, categoria_monbrecat) 
                           VALUES ($producto, $categoria);
   ");
   $stmt->execute();
   $db= close();   
   }
}
function borrarcategoriaprod($producto){
   $db= connect();
   //insertar producto en una categoria  disponibles
   $stmt = $db->prepare("  DELETE FROM lista_categoria  
                           WHERE producto_idproducto=$producto);
   ");
   $stmt->execute();
   $db= close();   
   
}
function obtenerminimocategoria(){
   $db= connect();
   //insertar producto en una categoria  disponibles
   $stmt = $db->prepare("  SELECT producto_idproducto FROM lista_categoria  
                           WHERE producto_idproducto NOT IN (SELECT idproducto FROM producto))
   ");
   $stmt->execute();
   while($resultado=$stmt->fetch()){
      $prd=$resultado['producto_idproducto'];
      $nuevo = $db->prepare("  INSERT INTO lista_categoria (producto_idproducto, categoria_monbrecat) 
      VALUES ($prd, 'otros');
      ");
      $nuevo->execute();
   };
   $db= close();   
   
}
function buscarproductos($texto,$localidad,$categorias){//solo una categoria
   $db= connect();
   //busar todas las categorias disponibles
   $q="  SELECT p.producto 
         FROM lista_categoria l, producto p  
         WHERE p.idproducto=l.producto_idproducto ";
if($texto!='')
      {       
      $q.=" AND p.producto like '%".$texto."%'  "; 
      }
if($localidad!='')
      {       
      $q.=" AND p.localidad = $localidad  "; 
      }
   if($categorias!='')
      {       
      $q.=" AND l.categoria_monbrecat = $categorias "; 
      }
   $stmt = $db->prepare($q);
   $stmt->execute();
   return $stmt->fetchAll(PDO::FETCH_ASSOC);
   $db= close();     
}
