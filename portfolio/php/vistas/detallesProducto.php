<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="copyright" content="Trebureus" />
    <meta http-equiv="cache-control" content="no-cache"/> <!--Se pueden quitar cuando acabemos el desarrollo-->
    <meta charset="utf-8"/>
    <title>Titulo</title>
    <link href="../../css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src=""></script>
    <script src=""></script>
</head>
<body>
    <div id="contenedor">
        <?php require_once("../estructura/header.php"); ?>
    <!--Aqui empieza el contendio-->
    <main id="detallesProducto">
        <div class="nombreLocalidadFav">
            <div><i>Vendedor:</i><i id="dUsuario">Manolo</i></div><div><i>Localidad:</i>
            <i class="dLocalidad">Burgos</i></div><a id="" class="fav">&#9825;</a>
        </div>
        <div class="imagenesProducto">
            <img src="https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg"/>
        </div>
        <div class="dPrecioTituloCat">
            <h2 id="dPrecioTitulo">230€</h2><h2 id="dTitulo">Play Station 5</h2><i id="dCategoria" >Pesca</i>
        </div>
        <div class="dDescProducto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque aut, repellendus dolorem sed a, nulla quam debitis dignissimos culpa nisi pariatur expedita! Cupiditate quo impedit deserunt, modi suscipit ducimus?
        </div>
    </main>
    <!--Aqui acaba el contendio-->
    <?php require_once("../estructura/footer.php");?>
    </div>
    <script src="../../js/script.js"></script>
</body>
<html>
