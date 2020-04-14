import React, { Component } from 'react';
import axios from 'axios'; 
import './ClientPortal.css';

import theUser from '..//Images/female_user.png'; 

export default class ClientPortal extends Component {
    constructor() {
        super()
        //TODO add props (user, theme etc.)
    }

    componentDidMount() {
        console.log('--- CLIENT PORTAL COMPONENT MOUNTED ---')
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        return (
            <div id="cp_parent">
                <div className="cp_container_top">
                    {/* <img src={alienWorld}/>  */}
                    {/* TODO make component */}
                    <div className="main_client_header">
                        <img src={theUser}></img>
                        <div className="right_main_container">
                            <p>Welcome back!</p> 
                            <div className="button_container">
                                <button onClick={() => this.props.history.push('/projects')}>Projects</button>
                                <button>Contact Ethan</button>
                                <button>Payments</button>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        )
    }
}