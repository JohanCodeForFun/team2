// script
var btnDelete = document.querySelector('#btnDelete')
var listingId = document.querySelector('#listingId')
btnDelete.addEventListener('click', () => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: listingId.value })
    }
    fetch('http://', options)
        .then((response) => console.log(response))
        .catch((error) => {
            console.log(error)
        })
})

// route
const express = require('express')
const router = express.Router()

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
module.exports = router

// database
async function deleteOne(_id) {
    await collection.connect()
    let result = await Collection.deleteOne({ _id: _id })
    client.close()
    return result
}
module.exports = {
    deleteOne
}
