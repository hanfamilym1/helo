require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')

const app = express()
app.use(bodyParser.json())

let {
    SERVER_PORT,
    CONNECTION_STRING
}=process.env

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

massive(CONNECTION_STRING).then(db=>app.set('db',db))

app.listen(SERVER_PORT, ()=>{console.log(`Listenin my dude on ${SERVER_PORT}`)})

