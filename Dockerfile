FROM node:12.22-alpine3.15
#Variable de entorno que define la url de la base de datos
#MONGO_URL=mongodb://host.docker.internal:27017/ejemplo
#MONGO_URL=mongodb://mongohostname:27017/ejemplo
#MONGO_URL=mongodb+srv://backend:claveUsada123@sandbox.servidor.mongodb.net/ejemplo?retryWrites=true&w=majority
#el valor se va pasar en el docker-compose.yml
ENV MONGO_URL=
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

#por seguridad se ejecuta como un usuario no root
USER node
CMD [ "node", "server.js" ]
#ENTRYPOINT [ "node", "server.js" ]


# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplobackend:latest .
#sudo docker build -t calderonperaza/ejemplobackend:latest .
#sudo docker login 
#sudo docker push calderonperaza/ejemplobackend:latest

#SE LE PUEDE ENVIAR UNA VARIABLE DE ENTORNO AL CONTENEDOR
#sudo docker run --name backend -p 3000:3000 -d -e MONGO_URL='mongodb://localhost:27017/ejemplo' mirepo/ejemplobackend:latest

#para referir mongodb en el host se usa host.docker.internal si mongo corre localmente
#si corre en otro contenedor se usa el nombre del contenedor porque docker crea un dns para cada contenedor
#sudo docker run --name backend -p 3000:3000 -d -e MONGO_URL='mongodb://host.docker.internal:27017/ejemplo' mirepo/ejemplobackend:latest
