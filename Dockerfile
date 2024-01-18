FROM node:12.22-alpine3.15
#Variable de entorno que define la url de la base de datos
#MONGO_URL=mongodb://mongohostname:27017/ejemplo
#MONGO_URL=mongodb+srv://backend:claveUsada123@sandbox.servidor.mongodb.net/ejemplo?retryWrites=true&w=majority
#el valor se va pasar en el docker-compose.yml
ENV MONGO_URL=
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]
#CMD [ "node", "server.js" ]


# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplobackend:latest .