import React, { Component } from 'react';
import axios from 'axios'; 

import theUser from '..//Images/female_user.png'; 

export default class Login extends Component {
    constructor() {
        super()
        //TODO add props
        this.state = {
            username: '', 
            email: '',
            password: '', 
        }
    }

    componentDidMount() {
        console.log('--- LOGIN COMPONENT MOUNTED ---')
    }

    handleLogin = () => {
        const { email, password } = this.state
        if (email !== '' && password !== '') {

        } else {
            alert('Please enter login credentials')
        }
    }
     
    handleSignUp = () => {
        const { username, email, password } = this.state
        if (email !== '' && password !== '' && username !== '') {

        } else {
            alert('Please enter sing up credentials')
        }
    }

    monitorTextChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    monitorTextChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    monitorTextChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        //TODO add drop zone
        //Should alter portal for login/signup but for now, just have login
        return (
            <div className="login_parent">
                <div className="auth_oasis">
                    <img src={theUser}></img>
                    <div id="input_container">
                        <input onChange={(e) => this.monitorTextChangeUsername(e)}></input>
                        <input onChange={(e) => this.monitorTextChangeEmail(e)}></input>
                        <input onChange={(e) => this.monitorTextChangePassword(e)}></input>
                    </div>
                    <div id="button_container">
                        <button onClick={() => this.handleLogin }>Login</button>
                        <button onClick={() => this.handleLogin }>Sign Up</button>
                    </div>
                </div>
            </div>        
        )
    }
}