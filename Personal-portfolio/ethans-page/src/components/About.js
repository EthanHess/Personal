import React, { Component } from 'react';
import './About.css'; 
import axios from 'axios'; 
import YouTuber from 'youtube-embed-video'; 

export default class About extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- ABOUT COMPONENT MOUNTED ---')
    }

    render() {
        return (
            <div id="about_parent">

            </div>
        )
    }
}