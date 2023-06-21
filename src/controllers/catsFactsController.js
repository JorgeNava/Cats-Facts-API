const CatsFactsService = require('../services/catsFactsService.js');

class CatsFactsController {
  constructor(database, api) {
    this.database = database;
    this.api = api;
    this.catsFactsServiceInstance = new CatsFactsService(database, api);
  }

  async getCatsFacts(quantity) {
    return await this.catsFactsServiceInstance.getCatsFacts(quantity);
  }
  
  async saveCatsFacts(quantity) {
    const CATS_FACTS = await this.catsFactsServiceInstance.getCatsFacts(quantity);
    await this.catsFactsServiceInstance.saveCatsFacts(CATS_FACTS);
    return CATS_FACTS;
  }
}

module.exports = CatsFactsController;