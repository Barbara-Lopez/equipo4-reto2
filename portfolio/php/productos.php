<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="copyright" content="Trebureus" />
    <meta http-equiv="cache-control" content="no-cache"/> <!--Se pueden quitar cuando acabemos el desarrollo-->
    <meta charset="utf-8"/>
    <title>Titulo</title>
    <link href="../css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src=""></script>
    <script src=""></script>
</head>
<body>
    <div id="contenedor">
        <?php require_once("header.php"); ?>
    
    <!--Aqui empieza el contendio-->
    <main class="contenedorProductos">
        <fieldset id="formFiltroProductos">
            <form action="?" method="POST">
                <input type="text" id="fFiltro" name="fFiltro">
                <div id="divFCategoria">
                    <label for="fCategoria">Categor&iacute;a: </label>
                    <select id="fCategoria" name="fCategoria">
                        <!-- se meten las categorias mediante consulta sql -->
                    </select>
                </div>
                <div id="divFLocalidad">
                    <label for="fLocalidad">Localidad: </label>
                    <select id="fLocalidad" name="fLocalidad">
                        <!-- se meten las localidades mediante consulta sql -->
                    </select>
                </div>
                <div id="divFPrecioMax">
                    <label for="fPrecioMax">Precio max.: </label>
                    <input type="range" id="fPrecioMax" name="fPrecioMax" min="0" max="10000000">
                </div>
                <div id="divFPrecioMin">
                    <label for="fPrecioMin">Precio min.: </label>
                    <input type="range" id="fPrecioMin" name="fPrecioMin" min="0" max="10000000">
                </div> 
                <button type="fSubmit" id="submit">Filtrar</button>
            </form>
        </fieldset>
    </main>
    <!--Aqui acaba el contendio-->
    <?php require_once("footer.php");?>
    </div>
    <script src="../js/script.js"></script>
</body>
<html>
