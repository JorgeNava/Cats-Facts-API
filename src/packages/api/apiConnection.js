
class ApiConnection {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async fetchData(endpoint) {
    return await this.apiClient.get(endpoint);
  }

  async postData(endpoint, data) {
    return await this.apiClient.post(endpoint, data);
  }
}

module.exports = ApiConnection;