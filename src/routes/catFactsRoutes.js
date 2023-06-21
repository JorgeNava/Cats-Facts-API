const express = require('express');
const router = express.Router();

const CatsFactsController = require('../controllers/catsFactsController.js');

module.exports = function (database, api) {
  const catFactsControllerInstance = new CatsFactsController(database, api);

  router.get('/facts/:quantity', async (req, res) => {
    const quantity = req.params.quantity;
    const RET_VAL = await catFactsControllerInstance.getCatsFacts(quantity);
    res.send(RET_VAL);
  });
  
  router.post('/save-facts', async (req, res) => {
    const quantity = req.body.quantity;
    const RET_VAL = await catFactsControllerInstance.saveCatsFacts(quantity);
    res.send(RET_VAL);
  });
    
  return router;
};