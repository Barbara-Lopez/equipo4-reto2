#!/bin/bash
#php.sh
#Autor:trebureus
#Creación del modulo php
#Prerequisitos: paquetes
dpkg --get-selections|grep  -w php
		 	if test $? -ne 0
		 	then
				 apt-get install -y php libapache2-mod-php php-mysql
			else
				echo "El servicio del modulo php esta instalado"
			fi
#cambiamos el orden de la visualizacion de los modulos
sed -i "s|DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm|DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm|g" /etc/apache2/mods-enabled/dir.conf 
#Reiniciamos el servidor apache
sudo service apache2 restart
