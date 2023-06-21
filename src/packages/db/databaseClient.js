const mongoose = require('mongoose');
const Catsfact = require('../../models/catFactsModel');

class DatabaseClient {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
    this.connected = false;
    this.connect();
  }

  isConnected() {
    return this.connected;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log('[NAVA] connection opened');
      this.connected = true;
    } catch (error) {
      this.connected = false;
      console.log('[NAVA] connection error:', error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('[NAVA] connection closed');
      this.connected = false;
    } catch (error) {
      this.connected = false;
      console.log('[NAVA] connection error:', error);
      throw error;
    }
  }

  async createCatsFact(fact) {
    const NEW_CAT_FACT = new Catsfact({fact: fact});
    return await NEW_CAT_FACT.save();
  }
}

module.exports = DatabaseClient;