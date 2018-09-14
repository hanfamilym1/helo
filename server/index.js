const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())

const port = 4200

app.listen(port, ()=>{console.log(`Listenin my dude on ${port}`)})
