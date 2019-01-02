import React, { Component } from 'react';
import axios from 'axios'; 

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
        return (
            <div>
            </div>
        )
    }
}