class DatabaseConnection {
  constructor(databaseClient) {
    this.databaseClient = databaseClient;
  }

  async createCatsFact(fact) {
    return await this.databaseClient.createCatsFact(fact);
  }

  isConnected() {
    return this.databaseClient.isConnected();
  }

  async connect() {
    await this.databaseClient.connect();
    this.isConnected = true;
  }
  
  async disconnect() {
    await this.databaseClient.disconnect();
    this.isConnected = false;
  }
}

module.exports = DatabaseConnection;