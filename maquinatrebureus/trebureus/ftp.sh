#!/bin/bash
#ftp.sh
#Autor:trebureus
#Creación del servicio de FTP
#Prerequisitos: paquetes
dpkg --get-selections|grep  -w sudo

		 	if test $? -ne 0
		 	then
				 apt-get install -y sudo
			else
				echo "El servicio de sudo esta instalado"
			fi

dpkg --get-selections|grep  -w whois

		 	if test $? -ne 0
		 	then
				 apt-get install -y whois
			else
				echo "El servicio de whois esta instalado"
			fi

#Instalación

sudo apt-get install -y vsftpd
sudo apt-get install -y ftp
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.bak
sudo cp /vagrant/trebureus/vsftpd.conf /etc/vsftpd.conf


if ls /etc/vsftpd.userlist ; then
	echo "El archivo ya existe"
else	
	sudo touch /etc/vsftpd.userlist
fi
#Encriptación de clave
#Creación de usuario 
fusuario=/vagrant/trebureus/usuarios.csv
while IFS=';' read usuario clave
do
	
	if cat /etc/passwd|grep $usuario; then
		echo "El usuario trebureus ya existe"
	else
		echo $usuario
		echo $clave
		pass=$(mkpasswd -m sha-512 $clave)
		echo "Creando usuario trebureus"
		sudo useradd -p $pass $usuario
	sudo echo $usuario >> /etc/vsftpd.userlist
	fi
done < $fusuario
echo "Reiniciando servicio FTP"
sudo systemctl restart vsftpd