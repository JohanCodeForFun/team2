const config = require('./config')
const { MongoClient, ObjectId } = require('mongodb')

const connectionStr = config.CONNECTION_STRING
const client = new MongoClient(connectionStr)
const db = client.db('Team2')
const collection = db.collection('HusTest')
const House = require('./models/house')

client.connect()

async function getAll() {
    //await client.connect();
    //const projection = {} // ingen filtrering just nu
    //const limit = 3;
    let data = await collection
        .find()
        //.project(projection)
        //.limit(limit)
        .toArray()
    //client.close();
  return data;
}

async function deleteOne(_id) {
    let result = await collection.deleteOne({ _id: new ObjectId(_id) })
    return result
}

async function update(_id, dataToUpdate) {

  // dataToUpdate is an object containing at least one property to update

  if (!(_id && dataToUpdate)) {
    throw 'db.js update() - _id and dataToUpdate are required'
  }

  return await collection.updateOne(
    {
      _id: new ObjectId(_id)
    },
    {
      $set: dataToUpdate
    })
}

// lagt till funktion att skapa ett statiskt hus när
// post request görs till http://localhost:3000/hus/add

// Behöver uppdateras med dynamisk data som kommer med post body.

async function addHouse() {
    const house = new House({
        address: 'Strandvägen 12',
        city: 'Stockholm',
        postalCode: 12345,
        rooms: 20,
        floor: 0,
        price: 40000000,
        yearBuilt: 2022,
        size: 260,
        sold: false,
        description: 'Ditt drömboende på strandvägen!',
        images: ['http//bild1.jpg', 'http//bild2.jpg', 'http//bild3.jpg']
    })
    const result = await collection.insertOne(house)

    return result
}

module.exports = {
    getAll,
    addHouse,
    update,
    deleteOne
}
