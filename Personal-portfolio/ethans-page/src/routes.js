import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App.js'; 

//Components 
import Acting from './components/Acting.js'; 
import Books from './components/Books.js'; 
import Games from './components/Games.js'; 
import Login from './components/Login.js'; 
import Payments from './components/Payments.js'; 

export default (
    <Switch>
        <Route component={App} exactPath="/"/>
        <Route component={Login} path="/login"/>
        <Route component={Acting} path="/acting"/>
        <Route component={Games} path="/games"/>
        <Route component={Books} path="/books"/>
        <Route component={Payments} path="/payments"/>
    </Switch>
)