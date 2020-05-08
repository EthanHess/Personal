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

        const divArray = animationViewArray.map((item, index) => {
            return <div className={'animation_' + item}>{item}</div>
        })

        // const animations = divArray.map((item, index) => {
        //     return TweenLite.to(item, 1, {x: 100, y: 100})
        // })

        // for (var i = 0; i < divArray.length; i++) {
        //     const element = divArray[i]
        //     TweenLite.to(element, 1, {x: 100, y: 100})
        // }

        return (
            <div id="about_parent">
                {divArray}
            </div>
        )
    }
}