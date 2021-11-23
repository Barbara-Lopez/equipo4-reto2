
<form action="productos.php" method="post" id="formProducto" enctype="multipart/form-data">
    <fieldset>
        <legend>Subir producto</legend>
        <div class="formulario">
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
            <input type="hidden" name="producto" value="" class="categoria">

            <div>
                <input type="button" value="Agregar categoria" id="enviarCategoria" class="boton"> 
                <input type="button" value="Eliminar categoria" id="eliminarCategoria" class="boton"> 
            </div>

            <input type="button" value="Enviar" id="enviar" class="boton">
        </div>
    </fieldset>
</form>