const express = require('express');
const bodyParser = require('body-parser');

const catFactsRouter = require('./routes/catFactsRoutes.js');

module.exports = function (database, api) {
  const app = express();

  app.use(bodyParser.json());

  app.use('/cat-facts', catFactsRouter(database ,api));

  return app;
}