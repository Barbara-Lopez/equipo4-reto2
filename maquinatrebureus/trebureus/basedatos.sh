#!/bin/bash
#basedatos.sh
#Autor:trebureus
#Creación del servicio de la base de datos
#Prerequisitos: paquetes
# Instalar MySQL 
dpkg --get-selections|grep  -w mysql-server
		 	if test $? -ne 0
		 	then
				 apt-get install mysql-server -y
			else
				echo "El servicio de mysql-server esta instalado"
			fi

#insertar el restablecimiento de contrasena
sudo service mysql stop
sudo service mysql start
sudo mysql -u root --password="" -e "update mysql.user set authentication_string=password(''), plugin='mysql_native_password' where user='root';"
sudo mysql -u root --password="" -e "flush privileges;"

#crear nuevo usuario
sudo mysql -u root --password="" -e "CREATE USER 'trebureus'@'localhost' IDENTIFIED BY '12345Abcde';"
sudo mysql -u root --password="" -e "GRANT ALL PRIVILEGES ON * . * TO 'trebureus'@'localhost';"
sudo mysql -u root --password="" -e "FLUSH PRIVILEGES;"

sudo mysql -u trebureus --password="12345Abcde" <  /vagrant/trebureus/script.sql