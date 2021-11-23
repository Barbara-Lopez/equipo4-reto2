
<form action="registro.php" method="post" id="formUsuario" enctype="multipart/form-data">
    <fieldset>
        <legend>Registrar usuario</legend>
        <div class="formulario">
            <label for="nombreUsuario">Nombre usuario</label>
            <input type="text" class="usuario" id="nombreUsuario" placeholder="pepe12" >
            
            <label for="contrasena1">Contraseña</label>
            <input type="password" class="usuario" id="contrasena1" placeholder="contrasena" >
            
            <label for="contrasena2">Repetir contraseña</label>
            <input type="password" class="usuario" id="contrasena2" placeholder="contrasena" >
            
            <label for="nombre">Su nombre</label>
            <input type="text" class="usuario" id="nombre" placeholder="nombre">
            
            <label for="correo">Correo electronico</label>
            <input type="text" class="usuario" id="correo" placeholder=" pepe@gmail.com">

            <label for="tel">Telefono</label>
            <input type="text" class="usuario" id="tel" placeholder="655633677">
            
            <label for="direccion">Direccion</label>
            <input type="text" class="usuario" id="direccion" placeholder=" Vitoria alava">
            
            <label for="foto[]">Foto</label>
            <input type="file" class="usuario" id="foto" name="foto[]"  >
            
            <input type="button" value="Enviar" id="enviar" class="boton">
        </div>
    </fieldset>
</form>
