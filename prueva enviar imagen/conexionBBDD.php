<?php 

function connect(){
    try {
        # MySQL
        $dbh= new PDO("mysql:host=127.0.0.1:8889;dbname=retotrebureus", "root", "root");
        return $dbh;
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
}
function close(){
    $dbh=null;
    return $dbh;
}