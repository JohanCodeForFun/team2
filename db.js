const config = require('./config');
const { MongoClient, ObjectId } = require('mongodb');

const connectionStr = config.CONNECTION_STRING;
const client = new MongoClient(connectionStr);
const db = client.db('Team2');
const collection = db.collection('HusTest');

async function getAll() {
  await client.connect();
  //const projection = {} // ingen filtrering just nu
  //const limit = 3;
  let data = await collection.find()
    //.project(projection)
    //.limit(limit)
    .toArray();
  client.close();

  return data;
}

module.exports = {
  getAll
}
