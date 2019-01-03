import React, { Component } from 'react';
import './Acting.css'; 
import axios from 'axios'; 
import YouTuber from 'youtube-embed-video'; 
import modelingPicOne from '..//Images/modeling_main_portfolio_pic2.png'; 

export default class Acting extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- ACTING COMPONENT MOUNTED ---')
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        //https://www.youtube.com/watch?v=0D2FYI-7cmE
        return (
            <div id="acting_parent">
                <div id="acting_container">
                    <YouTuber className="video_display" videoId={'0D2FYI-7cmE'}/> 
                </div>
                <div id="modeling_container">
                    <img src={modelingPicOne} atl=""/>
                </div>
            </div>
        )
    }
}