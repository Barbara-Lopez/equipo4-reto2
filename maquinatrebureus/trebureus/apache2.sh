#!/bin/bash
#apache2.sh
#Autor: trebureus
#creacion de todo el contenido de los servidores //apache2/ssh/ftp/base de datos//
#PT1 ==>creacion de apache2
#Instalación de apache

#comprobacion de la existencia del apache
dpkg --get-selections | grep apache
if test $? -ne 0
then
 echo "Instalación de Apache"
		sudo apt-get update
		sudo apt-get install apache2 -y
else
				echo "Ya existe el servidor apache2"
fi
#Deshabilitar el fichero default
	echo "Deshabilitar el fichero default"
		sudo a2dissite 000-default

#Configuración de apache

	#Creación de directorios
		echo "Creación de directorios"
		sudo mkdir -p /var/www/publica/

	#Copiar las paginas web
		echo "Creamos las paginas web desde una carpeta remota"
		sudo cp -r /vagrant/retotrebureus/ /var/www/

	#Copiar los ficheros de configuración
	echo "Copiar fichero de configuración del defecto"
		sudo cp -f /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/publica.conf

	#Modificar los ficheros
	echo "Modificar los ficheros"
		#publica.conf
			echo "publica.conf"
				sudo sed -i s,'<VirtualHost *:80>',"<VirtualHost 172.20.224.182:80>",g /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'#ServerName www.example.com',"#ServerName www.trebureus.com",g /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'DocumentRoot /var/www/html',"DocumentRoot /var/www/retotrebureus/",g /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'</VirtualHost>',"ErrorDocument 404 /proyectoWallapop/portfolio/php/errores/error404.php",g /etc/apache2/sites-available/publica.conf
				sudo echo "ErrorDocument 503 /proyectoWallapop/portfolio/php/errores/error503.php" >> /etc/apache2/sites-available/publica.conf
				sudo echo "</VirtualHost>" >> /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'html',"/retotrebureus/public_html",g /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'error.log',"errorpublica.log",g /etc/apache2/sites-available/publica.conf
				sudo sed -i s,'access.log',"accesspublica.log",g /etc/apache2/sites-available/publica.conf

	#Habilitar los sitios 
	echo "Habilitar los sitios web"
		sudo a2ensite publica

#Recargamos el servicio
	echo "Recargando apache"
		sudo service apache2 stop
		sudo service apache2 start
#Reiniciamos el servicio
	#echo "Reiniciar apache"
	#sudo service apache2 restart