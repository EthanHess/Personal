import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js'; 
import ThreeSceneRubiks from './ThreeSceneRubiks.js'
import './Games.css'; 
import Slider from 'react-slick';
//TODO add TweenLite
import axios from 'axios'; 

//Images
import imageOne from '..//GameImages/gameOne_1.png'; 
import imageTwo from '..//GameImages/gameOne_2.png'; 
import imageThree from '..//GameImages/gameOne_3.png'; 
import imageFour from '..//GameImages/gameOne_4.png'; 
import imageFive from '..//GameImages/gameOne_5.png'; 

import { TweenLite } from "gsap/all";

export default class Games extends Component {
    constructor() {
        super()
        this.state = {
            imagesArray: [imageOne, imageTwo, imageThree, imageFour, imageFive], 
        }

        this.refreshGSAPAnimations()
    }

    refreshGSAPAnimations = () => {
        //Nodes
        this.planetOne = null; 
        this.planetTwo = null; 
        this.planetThree = null; 
        this.planetFour = null; 
        this.planetFive = null; 
        this.planetSix = null; 
        this.planetSeven = null; 
        this.planetEight = null; 
        this.planetNine = null; 
        //Animations
        this.tweenOne = null; 
        this.tweenTwo = null;
        this.tweenThree = null; 
        this.tweenFour = null; 
        this.tweenFive = null; 
        this.tweenSix = null;
        this.tweenSeven = null; 
        this.tweenEight = null; 
        this.tweenNine = null;
    }

    setImages = () => {
        this.setState({ imagesArray : [imageOne, imageTwo, imageThree, imageFour, imageFive] })
    }

    componentDidMount() {
        console.log('--- GAMES COMPONENT MOUNTED ---')
        this.animationInit()
    }

    componentWillUnmount(){

    }

    handleImageClick = (itemId) => {

    }

    shuffle = (array) => {
        var tmp, current, top = array.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
    }

    animationInit = () => {
        const timeGroupOne = 2
        const timeGroupTwo = 3
        const timeGroupThree = 4

        const width = window.innerWidth
        const height = window.innerHeight * 2

        //We could generate random but for now we want them in a specific place
        const xEndPointArray = [width/2.2, width/3.1, width/6.2, width/2.8, width/2.1, width/4, width/1.5, width/21, width/5.1]
        const yEndPointArray = [100, 150, 150, 80, 180, 130, 90, 60, 180] //we're not updating width now but when we are

        //Will have width/height classes
        const widthStartOne = width / 100
        const widthStartTwo = width / 50
        const widthStartThree = width / 30
        const widthStartFour = width / 20

        const widthEndOne = width / 25
        const widthEndTwo = width / 20
        const widthEndThree = width / 15
        const widthEndFour = width / 10

        const radiusStartOne = widthStartOne / 2
        const radiusStartTwo = widthStartTwo / 2
        const radiusStartThree = widthStartThree / 2
        const radiusStartFour = widthStartFour / 2

        const radiusEndOne = widthEndOne / 2
        const radiusEndTwo = widthEndTwo / 2
        const radiusEndThree = widthEndThree / 2
        const radiusEndFour = widthEndFour / 2

        //Will also generate random points
        const startForAX = width / 4 //lower bounds for random gen.
        const endForAX = startForAX + 30 //upper bounds for random gen. 

        for (var a = [], i = startForAX ; i < endForAX ; ++ i) a[i] = i;
        a = this.shuffle(a);
        console.log('--- random numbers ---', a)

        //Can't do percentages so we'll get center this way
        const centerX = width / 2
        const centerY = (height / 2) - 100 //100 is navbar height

        this.tweenOne = TweenLite.fromTo(this.animationBoxOne, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(36, 88, 173, .5)', borderRadius: radiusStartFour
        }, {
            x: xEndPointArray[0], y: 100, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: radiusEndFour
        })
        this.tweenTwo = TweenLite.fromTo(this.animationBoxTwo, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[1], y: 150, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(125, 214, 98, .6)', borderRadius: radiusEndThree
        })
        this.tweenThree = TweenLite.fromTo(this.animationBoxThree, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(219, 94, 204, .45)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[2], y: 150, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: radiusEndThree
        })
        this.tweenFour = TweenLite.fromTo(this.animationBoxFour, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(63, 219, 208, .4)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[3], y: 80, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: radiusEndThree
        })
        this.tweenFive = TweenLite.fromTo(this.animationBoxFive, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[4], y: 180, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(82, 67, 242, .75)', borderRadius: radiusEndThree
        })
        this.tweenSix = TweenLite.fromTo(this.animationBoxSix, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(7, 62, 239, .6)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[5], y: 130, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(7, 62, 239, .9)', borderRadius: radiusEndFour
        })
        this.tweenSeven = TweenLite.fromTo(this.animationBoxSeven, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[6], y: 90, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(219, 21, 51, .65)', borderRadius: radiusEndThree
        })
        this.tweenEight = TweenLite.fromTo(this.animationBoxEight, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[7], y: 60, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: radiusEndThree
        })
        this.tweenNine = TweenLite.fromTo(this.animationBoxNine, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[8], y: 180, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(237, 146, 9, .8)', borderRadius: radiusEndFour
        })
    }

    //TODO subclass three scene but this is a test
    render() {

        //For slider
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        //To populate slider
        const { imagesArray } = this.state
        const children = imagesArray.map((item, index) => {
            console.log('item + index', item, index)
            return <div className="scroll_child" key={index} onTouchStart="this.classList.toggle('hover');">
                <div className="game_flip_container">
                    <div className="front">
                        <div className="top_scroll_container">
                            <img className="main_image" 
                            onClick={() => this.handleImageClick(item.id)} 
                            src={item}
                            alt='event-card'/>
                        </div>
                    </div>
                    <div className="back">

                    </div>
                </div>
            </div>
        })

        console.log("children", children)
        console.log("images array", imagesArray)

        //Could use ID instead of class name if not going to reuse
        return (
            <div id="game_parent">
                {/* <ThreeScene/>  */}
                <ThreeSceneRubiks />
                <div ref={div => this.animationBoxOne = div} />
                <div ref={div => this.animationBoxTwo = div} />
                <div ref={div => this.animationBoxThree = div} />
                <div ref={div => this.animationBoxFour = div} />
                <div ref={div => this.animationBoxFive = div} />
                <div ref={div => this.animationBoxSix = div} />
                <div ref={div => this.animationBoxSeven = div} />
                <div ref={div => this.animationBoxEight = div} />
                <div ref={div => this.animationBoxNine = div} />
                <div className="animation_container_two">
                    <Slider className="slick_slider" {...settings}>
                        { children }
                    </Slider>
                </div>
                {/* toxicFork/react-three-renderer-example */}
                <div className="animation_container_three">
                    {/* TODO fill in with dropping cubes animation */}

                </div>
            </div>
        )
    }
}