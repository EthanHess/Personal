import React, { Component } from 'react';
import axios from 'axios'; 
import './Login.css'; 
import { loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'

import theUser from '..//Images/female_user.png'; 

class Login extends Component {
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

    //TODO geocode address for location? (react-geocode)

    handleLogin = () => {
        const { email, password } = this.state
        if (email !== '' && password !== '') {
            axios.post('api/auth/login', {}).then(response => {
                if (response.data.message === 'Username and Password do not match' || response.data.message === 'Username Does Not Exist. Please Click Register To Create an Account.') {
                    alert(response.data.message)
                } else {
                    this.props.loginUser(response.data)
                    this.props.history.push('/')
                }
            })
        } else {
            alert('Please enter login credentials')
        }
    }
     
    handleSignUp = () => {
        const { username, email, password } = this.state
        if (email !== '' && password !== '' && username !== '') {
            axios.post('api/auth/signup', {username: username, email: email, password: password}).then(response => {
                if (response.data.message === "Username is unavailable") {
                    alert(response.data.message)
                } else {
                    this.props.loginUser(response.data)
                    this.props.history.push('/')
                }
            })
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
                    <div className="input_container">
                        <input onChange={(e) => this.monitorTextChangeUsername(e)}></input>
                        <input onChange={(e) => this.monitorTextChangeEmail(e)}></input>
                        <input onChange={(e) => this.monitorTextChangePassword(e)}></input>
                    </div>
                    <div className="button_container">
                        <button onClick={() => this.handleLogin }>Login</button>
                        <button onClick={() => this.handleLogin }>Sign Up</button>
                    </div>
                </div>
            </div>        
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return {
        user
    }
 }

export default connect(mapStateToProps, {loginUser} )(Login)