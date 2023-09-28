config.json
Archivo que contiene la configuración de las peticiones

payload1.json
archivos que contiene la data a enviar en peticiones


Comando para lanzar las pruebas
ddosify -config config.json

la idea es levantar el backend en un contendor docker con recursos
limitados o en una vps con recursos definidos

si lo levantas en un contenedor recuerda ponerle network = host para que 
pueda acceder a la base de datos.
Puedes usar portainer para facilitar con GUI

1. haz el build de la apps con el docker file
2. sube la imagen compilada a docker hub haciendo docker push (debes tener las credenciales configuradas o usa portainer)

3. crea un contenedor con la imagen creada
   docker run --name backendDdosify -p 3000:3000 --network="host" -m 64M -c 0.5 -d juanperez/ejemploTareasBackend 
4. ya con la imagen corriendo lanzas la pruebas con ddosify
