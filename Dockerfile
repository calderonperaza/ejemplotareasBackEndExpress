FROM node:12.22-alpine3.15
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
ENV MONGO_URL=""
RUN npm install --production

COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]

# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplobackend:latest .

#en linux puede dar error de permisos, si te pasa mueve la carpeta
#a una ubicación en home, por ejemplo /home/usuario/ejemplobackend

#SE LE PUEDE ENVIAR UNA VARIABLE DE ENTORNO AL CONTENEDOR
#sudo docker run --name backend -p 3000:3000 -d -e MONGO_URL='mongodb://localhost:27017/ejemplo' mirepo/ejemplobackend:latest

#para referir mongodb en el host se usa host.docker.internal si mongo corre localmente
#si corre en otro contenedor se usa el nombre del contenedor porque docker crea un dns para cada contenedor
#sudo docker run --name backend -p 3000:3000 -d -e MONGO_URL='mongodb://host.docker.internal:27017/ejemplo' mirepo/ejemplobackend:latest
