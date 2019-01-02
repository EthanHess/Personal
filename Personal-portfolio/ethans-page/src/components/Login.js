import React, { Component } from 'react';
import axios from 'axios'; 

export default class Login extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- LOGIN COMPONENT MOUNTED ---')
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        return (
            <div className="login_parent">
                <div className="auth_oasis">
                    <img></img>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button></button>
                </div>
            </div>
        )
    }
}