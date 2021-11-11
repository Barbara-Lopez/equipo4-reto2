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
        <form action="#" method="post" id="formUsuario" enctype="multipart/form-data">
            <fieldset>
                <legend>Registrar usuario</legend>
                
                <label for="nif">Nif usuario</label>
                <input type="text" name="usuario" id="nif" placeholder="nif" minlength="5" maxlength="16">
                
                <label for="contrasena1">Contraseña</label>
                <input type="password" name="usuario" id="contrasena1" placeholder="contrasena" minlength="5" maxlength="20">
                
                <label for="contrasena2">Repetir ontraseña</label>
                <input type="password" name="usuario" id="contrasena2" placeholder="contrasena" minlength="5" maxlength="20">
                
                <label for="nombre">Su nombre</label>
                <input type="text" name="usuario" id="nombre" placeholder="nombre">
                
                <label for="correo">Correo electronico</label>
                <input type="text" name="usuario" id="correo" placeholder="Ejemplo: pepe@gmail.com">
                
                <label for="direccion">Direccion</label>
                <input type="text" name="usuario" id="direccion" placeholder="Ejemplo: Vitoria-Gasteiz,Alava">
                
                <label for="foto">Foto</label>
                <input type="file" name="usuario" id="foto" accept="image/png,image/jpeg,image/jpg">
                
                <input type="submit" value="Enviar" id="enviar">
            </fieldset>
        </form>
        
    </body>
</html>