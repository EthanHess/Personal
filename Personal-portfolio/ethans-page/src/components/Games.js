import React, { Component } from 'react';
import ThreeScene from './ThreeScene.js'; 
import axios from 'axios'; 

export default class Games extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- GAMES COMPONENT MOUNTED ---')
    }

    componentWillUnmount(){

    }

    //TODO subclass three scene but this is a test
    render() {
        //Could use ID instead of class name if not going to reuse
        return (
            // <div>
            // </div>
            <ThreeScene/> 
        )
    }
}