const express = require('express');
const os = require('os');


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

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
        res.status(204).send();
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
      res.status(204).send();
      console.log("Se pudo eliminar"+ listingQuery._id);
    });
});

module.exports = recordRoutes;
