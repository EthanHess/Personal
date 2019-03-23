import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js'; 
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


export default class Games extends Component {
    constructor() {
        super()
        this.state = {
            imagesArray: []
        }

        this.setImages()
    }

    setImages = () => {
        this.setState({ imagesArray : [imageOne, imageTwo, imageThree, imageFour, imageFive] })
    }

    componentDidMount() {
        console.log('--- GAMES COMPONENT MOUNTED ---')
    }

    componentWillUnmount(){

    }

    handleImageClick = (itemId) => {

    }

    //TODO subclass three scene but this is a test
    render() {

        //For slider
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        //To populate slider
        const { imagesArray } = this.state
        const children = imagesArray.map((item, index) => {
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

        //Could use ID instead of class name if not going to reuse
        return (
            <div id="game_parent">
                <ThreeScene/> 
                <div className="animation_container_two">
                    <Slider className="slick_slider" {...settings}>
                        { children }
                    </Slider>
                </div>
            </div>
        )
    }
}