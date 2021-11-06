const mongoose = require('mongoose')
const AccessAccountConfig = require('../../path/to/AccessAccountConfig')
const connectionUrl = `mongodb+srv://koaladev:${AccessAccountConfig.password}@node-api-cluster.sj79i.mongodb.net/database-test?retryWrites=true&w=majority`;

const dbConnection = mongoose.connect(connectionUrl)

module.exports = dbConnection;
