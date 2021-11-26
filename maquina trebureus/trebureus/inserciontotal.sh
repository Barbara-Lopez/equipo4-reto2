#!/usr/bin/env bash

apt-get update

# unzip is for composer
apt-get install vim unzip  -y

#script de creacion de apache
source /vagrant/trebureus/apache2.sh
#script de implementacion del php
source /vagrant/trebureus/php.sh
#script de implementacion de ip statica
source /vagrant/trebureus/ipstatica.sh

# instalacion del pgp-xdebug
# Change AllowOverride from None to All (between line 170 and 174)
sed -i '170,174 s/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

#script de creacion del servidor  de base de datos
source /vagrant/trebureus/basedatos.sh
# Instalar composer
cd ~
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
php -r "unlink('composer-setup.php');"
composer self-update

# Create a symlink
rm -rf /var/www
mkdir /var/www
ln -s /vagrant/ /var/www/html

#script de creacion del servidor ftp
source /vagrant/trebureus/ftp.sh






