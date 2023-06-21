class CatsFactsService {
  constructor(database, api) {
    this.database = database;
    this.api = api;
  }

  async getCatsFacts(quantity) {
    const FACTS_RESPONSE = await this.api.fetchData(`/facts?limit=${quantity}`);
    const CATS_FACTS = FACTS_RESPONSE?.data?.data;
    return CATS_FACTS;
  }
  
  async saveCatsFacts(CATS_FACTS) {
    for (let i = 0; i < CATS_FACTS.length; i++) {
      const CATS_FACT = CATS_FACTS[i]?.fact;
      await this.database.createCatsFact(CATS_FACT);
    }

    return CATS_FACTS;
  }
}

module.exports = CatsFactsService;