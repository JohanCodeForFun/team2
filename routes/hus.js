const express = require('express');
const router = express.Router();
//const fs = require('fs');

const db = require('../db');

router.get('/all', async(req, res) => {
  try {
    /*
    if(fileExist)
    */
    let data = await db.getAll();
    return res.json(data);
  } catch (e) {
    console.error(e);
    return res.statusCode(500);
  }
});

module.exports = router;
