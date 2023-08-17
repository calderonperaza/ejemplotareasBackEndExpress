//para estas pruebas vamos a usar el plugin chai-http
//npm install chai-http --save-dev
//y lo requerimos
//const chaiHttp = require('chai-http');
//y lo usamos
//chai.use(chaiHttp);

/*

const server = require('../server');
const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

//haremos una prueba haciendo una peticion a la ruta /
//y verificando que el status sea 200
//note que ahora se utiliza el parametro done
describe('02 prueba peticiones usaremos chai-http', () => {

    //primera prueba para verificar que raiz responda
    it('probando el estatus de el get a la raiz', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    }
    );

    //segunda prueba insertaremos una tarea
    //obtendremos el id de la tarea insertada para luego eliminarla
    let idTarea = '';
    it('Insertando datos', (done) => {
        chai.request(server)
            .post('/tareas')
            .send({ nombre: 'insertando prueba mocha', hecho:false })
            .end((err, res) => {
                //console.log(res.body);
                idTarea = res.body.id;
                assert.equal(res.status, 200);
                done();
            });
    });

    //verficamos que la nueva tarea este agregada en la ruta /tareas
    it('Verificando que la tarea se inserto', (done) => {
        chai.request(server)
            .get('/tareas')
            .end((err, res) => {                
                assert.equal(res.status, 200);
                //console.log(res.body);
                let tareas=res.body;
                let tarea=tareas.find(t=>t._id==idTarea);
                //console.log(tarea);
                assert.equal(tarea._id,idTarea);
                done();
            });
    });

    //ahora eliminamos la tarea que acabamos de agregar
    it('Eliminando la tarea insertada', (done) => {
        chai.request(server)
            .delete('/tareas/delete/'+idTarea)
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    }
    );


});

*/