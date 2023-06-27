//para estas pruebas vamos a usar el plugin chai-http
//npm install chai-http --save-dev
//y lo requerimos
//const chaiHttp = require('chai-http');
//y lo usamos
//chai.use(chaiHttp);


const server = require('../server');
const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

//haremos una prueba haciendo una peticion a la ruta /
//y verificando que el status sea 200
//note que ahora se utiliza el parametro done
describe('02 prueba peticiones usaremos chai-http', () => {
    it('probando el estatus de el get a la raiz', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    }
    );
});