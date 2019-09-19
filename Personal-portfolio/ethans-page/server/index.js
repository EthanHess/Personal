const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')

// --- CONTROLLERS ---

const authController = require('./controllers/authController') 

// --- DATABASE ---

require('dotenv').config()
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

const app = express()
app.use(bodyParser.json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
}))
app.use(express.static(`${__dirname}/../build`))

// --- ENDPOINTS ---

//Login/Register
app.post('/api/auth/login', authController.login)
app.post('/api/auth/signup', authController.register)
app.post('/api/auth/logout', authController.logout)
app.get('/api/auth/session', authController.getSession)

//User (Client) Profile

//Projects/Steps

//Payments

//Messages

// --- SERVER ---

//TODO check login

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
  console.log('Backend of Project Portal listening on port ' + SERVER_PORT)
})

