FROM mongo:5.0.6-focal
ENV MONGO_INITDB_ROOT_USERNAME=ejemplo
ENV MONGO_INITDB_ROOT_PASSWORD=ejemplo
ENV MONGO_INITDB_DATABASE=ejemplo
ADD https://raw.githubusercontent.com/calderonperaza/ejemplotareasBackEndExpress/main/db/mongodata.js /docker-entrypoint-initdb.d
EXPOSE 27017