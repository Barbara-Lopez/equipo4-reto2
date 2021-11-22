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
        <script src="../js/script.js"></script>
        <script src="../js/sideNav.js"></script>
        <link rel="stylesheet" href="../css/style.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    </head>
    <body>
        <?php
            require 'header.php'
        ?>
        <main>
        <button class="openbtn" >&#11446;</button> 
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
                        <input type="text" class="usuario" id="direccion" placeholder=" Vitoria,alava">
                        
                        <label for="foto[]">Foto</label>
                        <input type="file" class="usuario" id="foto" name="foto[]"  >
                        
                        <input type="button" value="Enviar" id="enviar" class="boton">
                    </div>
                </fieldset>
            </form>
        </main>
        <?php
            require 'footer.php'
        ?>
    </body>
</html>