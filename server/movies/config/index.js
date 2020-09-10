const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"
const dbName = "movies"
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

const connect = async () => await client.connect()
connect()

const db = client.db(dbName)
module.exports = db