#!/bin/bash
#apache2.sh
#Autor: trebureus
#creacion de todo el contenido de los servidores //apache2/ssh/ftp/base de datos//
#PT2 ==>creacion de ssh
#Instalación del paquete ssh
sudo apt-get update
#Comprobamos si ya existe el paquete de openssh-server 
dpkg --get-selections|grep  -w openssh-server
if test $? -ne 0
then
	sudo apt-get install  -y openssh-server
else
	echo "Servicio SSH ya instalado"
fi
sudo netstat -ltn|tr -s ' '|cut -d ' ' -f4|cut -d ':' -f2|grep -w 22 >>/dev/null
if test $? -ne 0
then
 	echo "Ha ocurrido un problema a la hora de instalar"
else
 	echo "Configurando SSH..."
fi
#creamos el grupo de ssh para los usuarios ssh
sudo groupadd treburgrup
#Generamos la contraseña
CONTRAS=$(mkpasswd -m md5 12345Abcde)
#Creamos el usuario de usuarios
sudo useradd -M -G treburgrup -p $CONTRAS trebureus

#Configuración SSH
echo "Configurando SSH ...."
echo "Port 8642
PermitRootLogin no
LoginGraceTime 30
MaxAuthTries 2
MaxStartups 2
AllowUsers trebureus
" > /etc/ssh/sshd_config
#reiniciar el servicio
sudo systemctl stop ssh
sudo systemctl start ssh