const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')

//TODO add controllers + other packages

// --- ENDPOINTS ---

//Login/Register
app.post('/api/auth/login', authController.login);
app.post('/api/auth/signup', authController.register);
app.post('/api/auth/logout', authController.logout);
app.get('/api/auth/session', authController.getSession)

//User (Client) Profile

//Projects/Steps

//Payments

//Messages