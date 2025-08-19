const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'API de tu proyecto',
      version: '1.0.0',
      description: 'Documentación de la API de tu proyecto usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Reemplaza con la URL de tu servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas. Adapta esta línea según tu estructura de carpetas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;