const express = require("express");
const router = express.Router();
const validateHousePriceIsNumber = require("../helpers/validateDownPayment");

const db = require("../db");

// Service, calculate downpayment from total house cost.
// Usage example: post { "huspris": 32345666 } to /down-payment

router.post("/down-payment", async (req, res) => {
  const huspris = req.body.huspris;
  try {
    return res.send(validateHousePriceIsNumber(huspris));
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    let data = await db.getAll();
    return res.json(data);
  } catch (e) {
    console.error(e);
    return res.statusCode(500);
  }
});

router.post('/add', async (req, res) => {
    try {
        const data = req.body
        const result = await db.addHouse(data)
        res.json(result)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

router.delete("/remove", async (req, res) => {
  let _id = await req.body._id;
  try {
    console.log(_id);
    await db.deleteOne(_id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.put("/update", async (req, res) => {
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
    const { _id, ...dataToUpdate } = req.body;

    let updateResponse = await db.update(_id, dataToUpdate);
    return res.json(updateResponse);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
