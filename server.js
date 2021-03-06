const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
app.use(parser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('solar_system');

    const planetsCollection = db.collection('planets');
    const quizesCollection = db.collection('quizes');
    const resultsCollection = db.collection('results');

    const planetsRouter = createRouter(planetsCollection);
    const quizesRouter = createRouter(quizesCollection);
    const resultsRouter = createRouter(resultsCollection);

    app.use('/api/planets', planetsRouter);
    app.use('/api/quizes', quizesRouter);
    app.use('/api/results', resultsRouter);
  })
  .catch(console.err);

 app.listen(3000, function () {
   console.log(`Listening on port ${this.address().port}`)
 });
