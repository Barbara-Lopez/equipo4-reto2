<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="copyright" content="Trebureus" />
        <meta http-equiv="cache-control" content="no-cache"/> <!--Se pueden quitar cuando acabemos el desarrollo-->
        <meta charset="utf-8"/>
        <title>Error 503</title>
        <link href="../../css/style.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../../js/sideNav.js"></script>
        <script src=""></script>
    </head>
    <body>
        <div id="contenedor">
            <?php require_once("../estructura/header.php"); ?>
        <!--Aqui empieza el contendio-->
        <main>
             
            <?php require_once("../errores/error503.php"); ?>

        </main>
        <!--Aqui acaba el contendio-->
        <?php require_once("../estructura/footer.php");?>
        </div>
        <script src="../../js/script.js"></script>
    </body>
<html>