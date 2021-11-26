<?php
require_once("../conexionbd.php");
function comprobarSesion(){
    //if(isset($_COOKIE["SESION"])){
    //    $token=$_COOKIE["SESION"];
    if(isset($_POST["token"])){
        $token=$_POST["token"];
        $db= connect();
        $stmt = $db->prepare("SELECT idusu, exptoken FROM sesiones WHERE token = :token");
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data=array('token' => $token);
        $stmt->execute($data);
        $cuenta = $stmt->rowCount();
        $db= close(); 
        if($cuenta > 0){
            $infoToken=$stmt->fetch();
            if($infoToken["exptoken"] < time()){
                $msg=array('expired'=>'true');
                echo json_encode($msg);
            }
            else{
                $msg=array('expired'=>'false',
                            'idusu'=>$infoToken['idusu']);
                echo json_encode($msg);
            }
        }else{
            $msg=array('expired'=>'true');
            echo json_encode($msg);
        }   
    }else{
        $msg=array('expired'=>'true');
        echo json_encode($msg);
    }   
}


function comprobarSesionPHP(){
    if(isset($_COOKIE["SESION"])){
        $token=$_COOKIE["SESION"];
        $db= connect();
        $stmt = $db->prepare("SELECT idusu, exptoken FROM sesiones WHERE token = :token");
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data=array('token' => $token);
        $stmt->execute($data);
        $db= close(); 
        $infoToken=$stmt->fetch();
        if($infoToken["exptoken"] < time()){
            $msg=array('expired'=>'true');
            return $msg;
        }
        else{
            $msg=array('expired'=>'false',
                        'idusu'=>$infoToken['idusu']);
            return $msg;
        }
    }   
}
comprobarSesion();


?>