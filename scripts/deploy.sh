#!/bin/bash
cd s/Formation/React/my-pokedex
git pull origin master
scp -r . /var/www/html --exclude .git