<?php 
 require "../conexionbd.php";

function selectAllProductos(){
    $db= connect();
    //busar todas las categorias disponibles
    
    $stmt = $db->prepare("SELECT * FROM producto");
    $stmt->execute();
    $db= close(); 
    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

function selectLastProducts($numProducto){
    $db= connect();    
    $stmt = $db->query("SELECT * FROM producto order by idproducto desc limit $numProducto");
    $stmt->execute();
    $db= close(); 
    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

function selectAllProductosImg(){
    $db= connect();
    //busar todas las categorias disponibles
    
    $stmt = $db->prepare("SELECT * FROM producto");
    $stmt->execute();
    $datosProducto = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt= $db->prepare("SELECT p.*, i.imagenfoto FROM producto p, imagen i where i.producto_idproducto=p.idproducto ");
    $stmt->execute();
    $imagenes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $datos=json_encode($datosProducto);
    $imgs=json_encode($imagenes);
    $datosImgs=$datos . $imgs;
    $productoImgs = json_encode($datosImgs);
    echo $imgs;
    $db=close();
}



function insertarprod(){
    //Crear array de datos
    $datos= array(
        'titulo'=> $_POST["titulo"],
        'descripcion'=> $_POST["descripcion"],
        'precio'=>$_POST["precio"],
        'stock'=>$_POST["stock"],
        'localidad'=>$_POST["localidad"],
    );
    //Crear conexion mysql
    $db= connect();
    //obtencion del id del usuario que va a meter el nuevo producto
    $usuario=obteneridusu();
    $stmt = $db->prepare(" INSERT INTO producto ( titulo, descripcion, precio, stock,localidad,  usuariosubido) 
    VALUES ( :titulo, :descripcion, :precio, :stock, :localidad,  $usuario)
    ");
    $stmt->execute($datos);
    $db= close();       
    //busar id maximo existente
    $objeto=buscaridmaxprod();
    insimagenprod($objeto);

};
function modificarprod(){
    //Crear array de datos
    $datos= array(
        'titulo'=> $_POST["titulo"],
        'descripcion'=> $_POST["descripcion"],
        'precio'=>$_POST["precio"],
        'stock'=>$_POST["stock"]
    );
    //Crear conexion mysql
    $db= connect();
    //busar id del producto
    $objeto=obteneridprod();
    $stmt = $db->prepare("  UPDATE producto 
                            SET titulo=:titulo, 
                            descripcion=:descripcion, 
                            precio=:precio, 
                            stock=:stock,
                            localidad=:localidad
                            WHERE idproducto=$objeto;
                    ");
     $stmt->execute($datos);
     $db= close();
     moverimagenprod($objeto);

    
};
function borrarprod(){
    //Crear conexion mysql
    $db= connect();
    //busar id del  producto
    $objeto=obteneridprod();
    $stmt = $db->prepare("  DELETE 
                            FROM producto 
                            WHERE idproducto=$objeto;
                        ");
   $stmt->execute();
   $db= close();
   borrarimagenprod($objeto);
};
function borrarprodusu($objeto){ // id del usuario insertado previamente
    //buscar todas las imagenes de todos los productos
    borrarmultipleimagenporusu($objeto);
    //Crear conexion mysql
    $db= connect();
    $stmt = $db->prepare("  DELETE 
                            FROM producto 
                            WHERE usuariosubido=$objeto;
                        ");
   $stmt->execute();

   $db= close();
   borrarimagenprod($objeto);
};
function buscaridmaxprod(){

    $db = connect();
    //Extraer la  ultima id, que sera el maximo
    $result = $db->query("SELECT max(idproducto) FROM producto");
    $result->execute();
    $Datos = $result->fetch();
    return $Datos['idproducto'];
    $db= close();
};
function obteneridusu(){
    return $_COOKIE["session"];
}
function obteneridprod(){
    return $_COOKIE["session"];
}
function buscarproductosporpersonasubida($id){
    $db= connect();
    //buscamos todos los id de lps productos de la persona
    $stmt = $db->prepare("  SELECT  idproducto
                            FROM producto 
                            WHERE usuariosubido=$id;
                        ");
   $stmt->execute();
   return $stmt->fetchAll(PDO::FETCH_ASSOC);
   $db= close();
}
function borrarmultipleimagenporusu($id){
    $productos = buscarproductosporpersonasubida($id);
    foreach ($productos as $row){
        borrarimagenprod($row['idproducto']);
    }
}