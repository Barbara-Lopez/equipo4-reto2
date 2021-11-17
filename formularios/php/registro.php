<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registro</title>
        <script src="../js/jquery-3.6.0.min.js"></script>
        <script src="../js/objetos.js"></script>
        <script src="../js/verificarFormularios.js"></script>
        <link rel="stylesheet" href="../css/formularios.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    </head>
    <body>
        <?php
            require "enviarBaseDatos.php";
        ?>
        <form action="registro.php" method="post" id="formUsuario" enctype="multipart/form-data">
            <fieldset>
                <legend>Registrar usuario</legend>
                
                <label for="nif">Nif usuario</label>
                <input type="text" class="usuario" id="nif" placeholder="11111111J" minlength="5" maxlength="16">
                
                <label for="contrasena1">Contraseña</label>
                <input type="password" class="usuario" id="contrasena1" placeholder="contrasena" minlength="5" maxlength="20">
                
                <label for="contrasena2">Repetir contraseña</label>
                <input type="password" class="usuario" id="contrasena2" placeholder="contrasena" minlength="5" maxlength="20">
                
                <label for="nombre">Su nombre</label>
                <input type="text" class="usuario" id="nombre" placeholder="nombre">
                
                <label for="correo">Correo electronico</label>
                <input type="text" class="usuario" id="correo" placeholder=" pepe@gmail.com">

                <label for="tel">Telefono</label>
                <input type="text" class="usuario" id="tel" placeholder="655633677">
                
                <label for="direccion">Direccion</label>
                <input type="text" class="usuario" id="direccion" placeholder=" Vitoria,alava">
                
                <label for="foto">Foto</label>
                <input type="file" class="usuario" id="foto" accept="image/png,image/jpeg,image/jpg">
                
                <input type="button" value="Enviar" id="enviar">
            </fieldset>
        </form>
        
    </body>
</html>