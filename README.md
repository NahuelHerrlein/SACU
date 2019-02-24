# SACU
# Sistema de Administración de Campeonatos Universal

Aplicacion creada con angular 6 contra servidor REST Express y Postgresql para la asignatura Laboratorio 4 de la Tecnicatura Superior en Programacion de la UTN-FRP.

# Modo desarrollo
-Una vez descargado y habiendo intalado todos los paquetes necesarios ejecute el siguiente comando dentro de la carpeta del proyecto para levantarlo:
`ng serve -o`

-Para levantar el servidor dirijase dentro de la carpeta src/server y ejecute el siguiente comando:
`nodemon index.js`

#Observaciones
-Para el servidor las dependencias necesarias son => "npm install -s express sequelize nodemon pg pg-hstore multer body-parser". 
-Para la app agregamos bootstrap jquery y popper => "npm install -s bootstrap jquery popper.js --save-prod".

-Para levantar el servidor debe crear primero una base de datos de postgres llamada "SACUDB". Es importante que la base de datos sea Postgres ya que se utiliza la opcion "returning: true" y en la documentacion oficial indica que ésta opción solo funciona con dicha base de datos
