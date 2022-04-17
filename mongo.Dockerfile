FROM mongo:5.0.6-focal
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=ejemplo
ENV MONGO_INITDB_DATABASE=ejemplo
COPY /db/mongodata.js /docker-entrypoint-initdb.d/
EXPOSE 27017