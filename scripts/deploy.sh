#!/bin/bash -eu
cd /c/Users/leome/OneDrive/Documents/Sipios/my-pokedex
git pull origin master
rcp -r . /var/www/html --exclude .git