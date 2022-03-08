# API que entrega información acerca de politicos de Chile

Escrita en NodeJS con el framework Express.js

Los datos originalmente se encuentran en archivos csv, por lo que primero es necesario hacer el import de esos datos a mongo para que estos queden disponibles para busquedas en la API.

Se deben llenvar variables de entorno
## Comandos para deploy

docker-compose up

sudo docker cp ./politicos2.csv  politician-search-cl_mongo-politicos_1:/

docker exec -i -t politician-search-cl_mongo-politicos_1 /bin/bash

mongoimport --type csv -d politicos -c politicos --headerline --drop --authenticationDatabase admin  -u=<username> -p=<password> politicos2.csv    

mongoimport --type csv -d politicos -c partidos --headerline --drop --authenticationDatabase admin  -u=<username> -p=<password> partidos.csv 
