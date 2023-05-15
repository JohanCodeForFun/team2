const express = require('express')
const router = express.Router()
//const fs = require('fs');

const db = require('../db')

router.get('/all', async (req, res) => {
    try {
        /*
    if(fileExist)
    */
        let data = await db.getAll()
        return res.json(data)
    } catch (e) {
        console.error(e)
        return res.statusCode(500)
    }
})

router.delete('/remove', async (req, res) => {
    let _id = await req.body._id
    try {
        console.log(await db.deleteOne(_id))
        res.sendStatus(200)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


router.put('/update', async (req, res) => {

  /*

  REQUEST DATA EXAMPLE:
  {
    "_id": "6461e5c1a874dd3334720dd7",
	  "address": "Trekantsvägen 1",
    "rooms": 3,
    "price": 1000000
  }

   */

  try {

    const {_id, ...dataToUpdate} = req.body;

    let updateResponse = await db.update(_id, dataToUpdate);
    return res.json(updateResponse);

  } catch (err) {

    console.error(err);
    return res.sendStatus(500);

  }
});

module.exports = router;
