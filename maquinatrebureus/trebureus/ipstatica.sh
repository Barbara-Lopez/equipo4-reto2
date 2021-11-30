#!/bin/bash
#ipstatica.sh
#Autor: trebureus
#creacion de todo el contenido de los servidores //apache2/ssh/ftp/base de datos//
#PT0 ==>creacion de ip statica
#Instalación del ip
#creacion de la copia del ip
cp /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bk_`date +%Y%m%d%H%M`
cp /etc/netplan/50-cloud-init.yaml /etc/netplan/51-cloud-init.yaml
cat > /etc/netplan/51-cloud-init.yaml <<EOF
network:
    renderer: networkd
    ethernets:
        enp0s8:
            dhcp4: no
            addresses: [172.20.224.112/16]
            gateway4: 172.20.1.2
            nameservers:
              addresses: [172.20.224.100,172.20.223.100]
    version: 2
EOF
rm /etc/netplan/50-vagrant.yaml
sudo netplan apply
echo "==========================="
echo