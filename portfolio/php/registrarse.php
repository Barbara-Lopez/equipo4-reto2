<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="copyright" content="Trebureus" />
        <meta http-equiv="cache-control" content="no-cache"/> <!--Se pueden quitar cuando acabemos el desarrollo-->
        <meta charset="utf-8"/>
        <title>Registro</title>
        <script src="../js/jquery-3.6.0.min.js"></script>
        <script src="../js/objetos.js"></script>
        <script src="../js/verificarFormularios.js"></script>
        <script src="../js/sideNav.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
        <link href="../css/style.css" rel="stylesheet">
    </head>
    <body>
        <div id="contenedor">
            <?php require_once("main/header.php"); ?>
        <!--Aqui empieza el contendio-->
        <main>
             
            <?php require_once("main/formRegistro.php"); ?>

        </main>
        <!--Aqui acaba el contendio-->
        <?php require_once("main/footer.php");?>
        </div>
        <script src="../js/script.js"></script>
    </body>
<html>