import React, { Component } from 'react';
import axios from 'axios'; 
import './ClientPortal.css';

export default class ClientPortal extends Component {
    constructor() {
        super()
        //TODO add props
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
                </div>
            </div>
        )
    }
}