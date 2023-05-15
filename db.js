const config = require('./config');
const { MongoClient, ObjectId } = require('mongodb');

const connectionStr = config.CONNECTION_STRING;
const client = new MongoClient(connectionStr);
const db = client.db('Team2');
const collection = db.collection('HusTest');

client.connect();

async function getAll() {
  //await client.connect();
  //const projection = {} // ingen filtrering just nu
  //const limit = 3;
  let data = await collection.find()
    //.project(projection)
    //.limit(limit)
    .toArray();
  //client.close();

  return data;
}

async function update(_id, dataToUpdate) {

  // data is an object containing at least one of the following properties to update

  /*
  address (string)
  rooms (int)
  price (int)
  year (int)
  size (int)
  city (string)
  postalCode (int)
  sold (boolean)
  description (string)
  images (array)
  floor (int)
   */

  if (!(_id && dataToUpdate)) {
    throw "db.js update() - _id and dataToUpdate are required"
  }

  let updateResponse = await collection.updateOne(
    {
      _id: new ObjectId(_id)
    },
    {
      $set: dataToUpdate
    })

  return updateResponse;

}

module.exports = {
  getAll,
  update
}
