
<form id="formProducto" enctype="multipart/form-data">
    <fieldset>
        <legend>Subir producto</legend>
        <div class="formulario">
            <label for="nombre">Nombre del producto</label>
            <input type="text" class="productos" id="nombre" placeholder="producto">
            
            <label for="descripcion">Descripcion</label>
            <textarea class="productos" id="descripcion" cols="60" rows="20" placeholder="descripción del producto"></textarea>
            
            <label for="precio">Precio</label>
            <input type="text" class="productos" id="precio" >
            
            <label for="stock">Stock</label>
            <input type="number" class="productos" id="stock" >
            
            <label for="foto">Foto</label>
            <input type="file" class="productos" id="imgprod" name="imgprod[]" multiple>

            <label for="localidad">Localidad</label>
            <select id="localidad"  name="localidad">
                <option value="vitoria">Vitoria - Gasteiz</option>
                <option value="amurrio">Amurrio</option>
                <option value="bernedo">Bernedo</option>
                <option value="bilbao">Bilbao</option>
                <option value="abadino">Abadiño</option>
                <option value="laguardia">Laguardia</option>
                
            </select>
            
            <label for="categoria">Categoria</label>
            <select id="categoria" >
                <option value="electronica">electronica</option>
                <option value="robotica">robotica</option>
                <option value="escolar">escolar</option>
            </select>
            <input type="hidden" class="productos" value="" id="categorias">

            <div>
                <input type="button" value="Agregar categoria" id="enviarCategoria" class="boton"> 
                <input type="button" value="Eliminar categoria" id="eliminarCategoria" class="boton"> 
            </div>

            <input type="button" value="Enviar" id="enviar" class="boton">
        </div>
    </fieldset>
</form>