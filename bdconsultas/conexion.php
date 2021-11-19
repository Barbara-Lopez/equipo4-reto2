<?php

function connect(){
  try {
    # contenido minimo necesario
$host="localhost";
$dbname="reto";
$user="unai";
$pass="12345";
    # MS SQL Server
    //$dbh= new PDO("mssql:host=$host;dbname=$dbname, $user, $pass");
   
    # MySQL (el que se usa actualmente)
    $dbh= new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
   
    # SQLite Database
   // $dbh= new PDO("sqlite:my/database/path/database.db");
    return $dbh;
  }
  catch(PDOException $e) {
      echo $e->getMessage();
  }
}
function close(){
    $dbh = null;
    return $dbh;
}