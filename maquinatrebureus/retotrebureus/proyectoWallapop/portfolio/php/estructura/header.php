    <header>
        <div id="contenedorIconos">
        <button class="openbtn" >&#11446;</button>
            <a id="bCesta" style="font-size: 30px; background-color:white;">&#128722;</a>
        </div>
        <div id="contenedorCesta" class="cestaHidden">
          <div class="tituloCesta"><b>Producto</b><b>Precio</b>
            <b>Unidades</b><b>Subtotal</b><i></i>
            </div>
          <ul id="contenedorItemsCesta">
            
            
          </ul>
          <div class="tituloCesta totalCesta">
            <b>Total</b><b id="totalCesta"></b>
          </div>
          <input type="button" id="bComprarCesta" value="Comprar">
        </div>
        <div id="barraBuscador">
            <input id="inputBuscador" class="inputBuscador" type="text" />
            <button id="bBuscar"><img id="buscarIcon" src="https://cdn-icons-png.flaticon.com/512/261/261068.png"/></button>
        </div>
        <div id="contenedorSesion" class="ocultosLogin">
            <button type="button" id="bRegistro" class="bBonito">Registro</button>
            <button type="button" id="bInicio" class="bBonito"  >Inicio sesi&oacuten</button>
        </div> 
         
    </header>
    <div id="contenedorLogin" class="hidden ocultosLogin">
        <button id="bEnviar" name="bEnviar"><img id="imgEnviar" src="https://www.pngkey.com/png/full/570-5705198_icone-seta-png-icono-flecha.png"></button>
        <label for="inputUsuario">Usuario</label>
        <input type="text" id="inputUsuario" name="inputUsuario"/>
        <label for="inputPass">Contraseña</label>
        <input type="text" id="inputPass" name="inputPass"/>
    </div>
    <nav id="mySidebar" class="sidebar">
        <a href="javascript:void(0)"  class="closebtn" >x</a>
        <a href="/proyectoWallapop/portfolio/php/index.php">Inicio</a>
        <a id="enlaceRegistro" href="/proyectoWallapop/portfolio/php/vistas/registrarse.php">Registrarse</a>
        <a href="/proyectoWallapop/portfolio/php/vistas/crearProducto.php">Subir productos</a>
        <a href="/proyectoWallapop/portfolio/php/vistas/productos.php">Productos</a>
    </nav> 
    
    
    