import React, { Component } from 'react';
import axios from 'axios'; 

export default class Projects extends Component {
    constructor() {
        super()
        //TODO add props
    }

    componentDidMount() {
        console.log('--- PROJECTS COMPONENT MOUNTED ---')
    }

    render() {
        //Could use ID instead of class name if not going to reuse
        return (
            <div>
            </div>
        )
    }
}