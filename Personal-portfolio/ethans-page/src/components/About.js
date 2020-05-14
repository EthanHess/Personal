import React, { Component } from 'react';
import './About.css'; 
import axios from 'axios'; 
import YouTuber from 'youtube-embed-video'; 

import { TimelineLite } from "gsap/all"; 
//Imp. Tween Max

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            theme: "SPACE", 
          }

          //Can remove in state eventually now that we're using timeline
          this.myTween = new TimelineLite({paused: true})
          this.myElements = [];
    }

    //TODO use
    getRandomInt = (min, max) => {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    componentDidMount() {
        console.log('--- ABOUT COMPONENT MOUNTED ---')
        this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
    }

    initAnimations = () => {
        //https://greensock.com/forums/topic/14938-tween-through-array-for-values/
    }

    render() {

        return <div>
            <ul>
                {this.myElements.map((element, index) => <li
                    key={element.id}
                    ref={li => this.myElements[index] = li}
                >
                {element.name}
            </li>)}
            </ul>
        </div>;
    }
}