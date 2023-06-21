const axios = require('axios');

class ApiClient {
  constructor(url) {
    this.url = url;
  }

  async get(endpoint) {
    return await axios.get(this.url + endpoint);
  }

  async post(endpoint, data) {
    if (data) {
      return await axios.post(this.url + endpoint, data);
    }
  }
}

module.exports = ApiClient;