const mongoose = require('mongoose')
require('dotenv/config')
// const AccessAccountConfig = require('../../path/to/AccessAccountConfig')
const db = {
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    bucket: process.env.MONGODB_DB_NAME
}
const connectionUrl = `mongodb+srv://${db.username}:${db.password}@node-api-cluster.sj79i.mongodb.net/${db.bucket}?retryWrites=true&w=majority`;

const dbConnection = mongoose.connect(connectionUrl)

module.exports = dbConnection;
