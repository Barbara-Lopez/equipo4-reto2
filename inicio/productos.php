<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="objetos.js"></script>
        <script src="jquery-3.6.0.min.js"></script>
        <script src="verificarFormularios.js"></script>
    </head>
    <body>
       
        <form action="#" method="post" id="formProducto" enctype="multipart/form-data">
            <fieldset>
                <legend>Subir producto</legend>
                
                <label for="nombre">Nombre del producto</label>
                <input type="text" name="producto" id="nombre" placeholder="producto">
                
                <label for="descripcion">Descripcion</label>
                <textarea name="producto" id="descripcion" cols="60" rows="20" placeholder="descripción del producto"></textarea>
                
                <label for="precio">Precio</label>
                <input type="text" name="producto" id="precio" >
                
                <label for="stock">Stock</label>
                <input type="number" name="producto" id="stock" >
                
                <label for="foto">Foto</label>
                <input type="file" name="producto" id="foto" accept="image/png,image/jpeg,image/jpg">
                
                <label for="categoria">Categoria</label>
                <select id="categoria">
                    <option value="electronica">electronica</option>
                    <option value="robotica">robotica</option>
                    <option value="escolar">escolar</option>
                </select>
                <input type="hidden" name="" value="" class="categoria">

                <input type="button" value="Agregar categoria" id="enviarCategoria"> 
                
                <input type="submit" value="Enviar" id="enviar">
            </fieldset>
        </form>
    </body>
</html>