<?php

//control de sessiones (en segundos)
ini_set("session.cookie_lifetime","7200");
ini_set("session.gc_maxlifetime","7200");
session_start();
//control favorito
function nuevofav($usu,$prod,$estado){
    $db= connect();
    //buscamos todos los id de lps productos de la persona
    $stmt = $db->prepare("  INSERT INTO compra (usuario_idusu, producto_idproducto, cantidad, estado) 
                            VALUES ($usu, $prod, '0', $estado);
                        ");
                        

   $stmt->execute();
}
function quitarfav($usu,$prod,$estado){
    $db= connect();
    //buscamos todos los id de lps productos de la persona
    $stmt = $db->prepare("  DELETE FROM compra (usuario_idusu, producto_idproducto, cantidad, estado) 
                            WHERE  usuario_idusu=$usu AND  producto_idproducto=$prod AND estado=$estado);
                        ");
                    
   $stmt->execute();
}

//control nueva compra
function meternuevacompra($usu,$prod,$estado){
    $db= connect();
    //buscamos todos los id de lps productos de la persona
    $stmt = $db->prepare("  DELETE FROM compra (usuario_idusu, producto_idproducto, cantidad, estado) 
                            WHERE  usuario_idusu=$usu AND  producto_idproducto=$prod AND estado=$estado);
                        ");
                    
   $stmt->execute();
}

