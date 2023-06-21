const creatApp = require('./src/server.js');
const ApiClient = require('./src/packages/api/apiClient.js');
const ApiConnection = require('./src/packages/api/apiConnection.js');
const DatabaseClient = require('./src/packages/db/databaseClient.js')
const DatabaseConnection = require('./src/packages/db/databaseConnection.js')

const DATABASE_URI = 'mongodb+srv://jorgenavadelapena:cisco@testingcluster.xsjtydn.mongodb.net/';
const databaseInstance = new DatabaseConnection(new DatabaseClient(DATABASE_URI, {}));

const API_URL = 'https://catfact.ninja';
const apiInstance = new ApiConnection( new ApiClient(API_URL));

const app = creatApp(databaseInstance, apiInstance);
app.listen(8000, () => {
  console.log('[NAVA] server running at port 8000');
});