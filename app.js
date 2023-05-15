const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hus = require('./routes/hus')
app.use('/hus', hus)

app.listen(PORT, () => {
    console.log('HUS API - Lyssnar på port: ' + PORT)
})
