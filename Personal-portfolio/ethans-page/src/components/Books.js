import React, { Component } from 'react';
import axios from 'axios'; 
import './Books.css';
import SACover from '..//Images/SACover.png';

export default class Books extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- BOOKS COMPONENT MOUNTED ---')
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        return (
            <div id="book_parent">
                <div className="book_container_top">
                    <img src={SACover}/> 
                </div>
            </div>
        )
    }
}