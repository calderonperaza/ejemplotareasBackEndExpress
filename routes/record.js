const express = require('express');
const os = require('os');


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get server information
 *     responses:
 *       200:
 *         description: Server information
 */
recordRoutes.route('/').get(async function (_req, res) {
  res.status(200).send('Bienvenido al Backend!!' 
  + "<br> Hostname = " + os.hostname()
  + "<br> OS = " + os.platform()
  + "<br> version = " + os.version()
  + "<br> Total Memoria "+ os.totalmem()  
  );  
});

recordRoutes.route('/error').get(async function (_req, res) {
  //AQUI BUSCAMOS TENER UN ERROR PARA QUE SE CAIGA EL BACKEND
  //El sistema debe poder levantar el servicio de nuevo

  res.status(200).send('Error');  
});



// This section will help you get a list of all the records.



/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: A list de todas las tareas
 */
recordRoutes.route('/tareas').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('Tarea')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
/**
 * @swagger
 * /tareas:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               hecho:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task created successfully
 */
recordRoutes.route('/tareas').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    nombre: req.body.nombre,
    hecho: req.body.hecho,
  };

  dbConnect
    .collection('Tarea')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(200).send({'id': result.insertedId});
        //res.status(204).send();
      }
    });
});

/*
// This section will help you update a record by id.
recordRoutes.route('/listings/updateLike').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $inc: {
      likes: 1,
    },
  };

  dbConnect
    .collection('listingsAndReviews')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log('1 document updated');
      }
    });
});
*/

// This section will help you delete a record.
/**
 * @swagger
 * /tareas/delete/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       400:
 *         description: Error deleting task
 */
recordRoutes.route('/tareas/delete/:id').delete((req, res) => {
  var mongodb = require('mongodb');
  var ObjectID = require('mongodb').ObjectID;
  var delete_id = req.params.id;//your id
  const dbConnect = dbo.getDb();

  const listingQuery = { "_id": new mongodb.ObjectID(delete_id.toString()) };
  //console.log(listingQuery);
  dbConnect
    .collection('Tarea').deleteOne(listingQuery)
    .then(()=>{
      res.status(200).send();
      console.log("Se pudo eliminar"+ listingQuery._id);
    });
});

module.exports = recordRoutes;
