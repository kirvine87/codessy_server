const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const handleError = function(err, res){
  res.status(500);
  res.json({status: 500, error: err});
};

const createRouter = function (collection) {

  const router = express.Router();
  //INDEX
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch(err => handleError(err, res))
  });
  //SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch(err => handleError(err, res))
  });

  //UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedResult = req.body;

    collection
    .findOneAndUpdate(
      {_id: ObjectID(id)},
      {$set: updatedResult},
      {returnOriginal: false}
    )
    .then(result => res.json(result.value))
    .catch(err => handleError(err, res))
  });

  return router;

};

module.exports = createRouter;
