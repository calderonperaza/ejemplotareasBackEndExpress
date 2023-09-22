config.json
Archivo que contiene la configuración de las peticiones

payload1.json
archivos que contiene la data a enviar en peticiones


Comando para lanzar las pruebas
ddosify -config config.json

la idea es levantar el backend en un contendor docker con recursos
limitados o en una vps con recursos definidos

si lo levantas en un contenedor recuerda ponerle network = host para que 
pueda acceder a la base de datos