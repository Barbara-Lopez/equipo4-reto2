<?php 
 require "conexionbd.php";

function insertarusu(){
    
    //Crear array
    $datos= array(
        'nombreusu'=> $_POST["nombreusu"],
        'contrasena'=> $_POST["contrasena"],
        'nombre'=>$_POST["nombre"],
        'gmail'=>$_POST["correo"],
        'tlfno'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
    //Crear conexion mysql
    $db= connect();
    //busar id maximo existente
    $stmt = $db->prepare("  INSERT INTO usuario ( nombreusu, contrasenausu, nombre, gmail, tlfno, direccion) 
                            VALUES ( :nombreusu, :contrasena, :nombre, :gmail, :tlfno, :direccion);
                        ");
    $stmt->execute($datos);
    $db= close();
    //Comprobar subida de imagen 
    if (isset($_FILES['imgusu'])) {        
        insimagenusu(obteneridusu());
    }
};
function modificarusu(){

    $datos= array(
        'nombreusu'=> $_POST["nombreusu"],
        'contrasena'=> $_POST["contrasena"],
        'nombre'=>$_POST["nombre"],
        'gmail'=>$_POST["correo"],
        'tlfno'=>$_POST["telefono"],
        'direccion'=>$_POST["direccion"]
    );
    $objeto=obteneridusu();
    //Crear conexion mysql
    $db= connect();
     //busar id maximo existente
     
 $stmt = $db->prepare(" UPDATE usuario 
                        SET nombreusu=:nombreusu, 
                            contrasenausu=:contrasenausu, 
                            nombre=:nombre, 
                            gmail=:gmail, 
                            tlfno=:tlfno, 
                            direccion=:direccion) 
                        WHERE idusu=$objeto;
 ");
 
     $stmt->execute($datos);
     $db= close();
    if (isset($_FILES['imgusu']['name'])) {
        cambiarimagenusu($objeto,$_FILES['imgusu']['name']);
    }else {
        borrarimagenusu($objeto);
    }
};
function borrarusu(){
    $objeto=obteneridusu();//id del usuario
    borrarimagenusu($objeto); //borrar imagen del usuario
    borrarprod($objeto);
    //Crear conexion mysql
    $db= connect();
    //busar id del usuario
    $stmt = $db->prepare("  DELETE 
                            FROM usuario 
                            WHERE idusu=$objeto;
    ");
    $stmt->execute();
    $db= close();
};
function buscaridmaxusu(){
    $db = connect();
    //Extraer ultima imagen de la BD mediante GET
    $result = $db->prepare("SELECT idusu FROM usuario WHERE id =(SELECT max(id) FROM images_tabla");
    $result->execute();
    if($result->rowCount()> 0){
       $Datos = $result->fetch();
            $archivo =$Datos['idusu'];
            return $archivo;
    }
    $db= close();
};
function obteneridusu(){
    return $_COOKIE["session"];
}
function subirimagenusu($id,$foto){
    //Crear conexion mysql
    $db= connect();
    $stmt = $db->prepare("  INSERT INTO imagen (imagenfoto, usuario_idusu) 
                            VALUES ($foto,$id);    
                        ");
    $stmt->execute();
    $db= close();

}
function cambiarimagenusu($id){
    //Crear conexion mysql
    moverimagenusu($id);
}
function borrarimagenusu($id){
    $db= connect();
    $stmt = $db->prepare("  DELETE FROM imagen 
                            WHERE usuario_idusu=$id;    
                        ");
    $stmt->execute();                    
    $db= close();
}
