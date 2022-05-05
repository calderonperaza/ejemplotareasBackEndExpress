FROM node:12.22-alpine3.15
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]

# para crear la imagen ejecute
#sudo docker build -t mirepo/ejemplobackend:latest .