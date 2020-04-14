import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

//import App from './App.js'; 

//Components 
import Home from './components/Home.js'; 
import Acting from './components/Acting.js'; 
import Books from './components/Books.js'; 
import Games from './components/Games.js'; 
import Login from './components/Login.js'; 
import Payments from './components/Payments.js'; 
import Projects from './components/Projects.js'; 
import ChatLobby from './components/ChatLobby.js'; 
import ClientPortal from './components/ClientPortal.js'; 
import About from './components/About.js';

export default (
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Login} path="/login"/>
        <Route component={Acting} path="/acting"/>
        <Route component={Games} path="/games"/>
        <Route component={Books} path="/books"/>
        <Route component={Payments} path="/payments"/>
        <Route component={Projects} path="/projects"/>
        <Route component={ChatLobby} path="/chatLobby"/>
        <Route component={ClientPortal} path="/clientPortal"/>
        <Route component={About} path="/about"/>
    </Switch>
)