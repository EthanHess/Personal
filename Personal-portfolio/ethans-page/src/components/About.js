import React, { Component } from 'react';
import './About.css'; 
import axios from 'axios'; 
import YouTuber from 'youtube-embed-video'; 

import { TweenLite } from "gsap/all";

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            theme: "SPACE", 
            animationViewArray: [], //Will map in render(), just have array of colors for UIView BG
            gsapArray: [] //Animations, do we need this as an array?
          }
  
          this.animationArrayCreate()
    }

    animationArrayCreate = () => {
        const { animationViewArray } = this.state
        if (animationViewArray.length == 0) {
            for (var i = 0; i < 30; i++) {
                animationViewArray.push(i); 
            }
        }
        console.log("animations array", animationViewArray)
    }

    componentDidMount() {
        console.log('--- ABOUT COMPONENT MOUNTED ---')
    }

    initAnimations = () => {

    }

    render() {

        const { animationViewArray } = this.state

        animationViewArray.map((item, index) => {

        })

        return (
            <div id="about_parent">

            </div>
        )
    }
}