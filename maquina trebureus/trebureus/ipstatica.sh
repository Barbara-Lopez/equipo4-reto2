#!/bin/bash
#ipstatica.sh
#Autor: trebureus
#creacion de todo el contenido de los servidores //apache2/ssh/ftp/base de datos//
#PT0 ==>creacion de io statica
#Instalación del ip
#creacion de la copia del ip
cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bk_`date +%Y%m%d%H%M`
#cambia la dhcp de 'yes' to 'no'
sed -i "s/dhcp4: yes/dhcp4: no/g" /etc/netplan/00-installer-config.yaml
# obtenemos la informacion NIC (centro de informacion de red)
nic=ifconfig | awk 'NR==1{print $2}'
echo $2
# metemos la ip que queremos poner de statico
staticip=192.168.1.15/24
echo
cat > /etc/netplan/00-installer-config.yaml <<EOF
network:
  ethernets:
    $nic
      dhcp4: no
      addresses:[$staticip]
  version: 2
EOF
sudo netplan apply
echo "==========================="
echo