import React, { Component } from 'react';
import './App.css';
import profile from './profile_pic.jpg'

//Icons (maybe group in divs by four?)

import Ilmatic from './Images/Ilmatic.png'; 
import Hipervision from './Images/Hipervision.png'; 
import ClokIcon from './Images/ClokIcon.png'; 
import Weedherb from './Images/Weedherb.png'; 

import Cosmologist from './Images/Cosmologist.png'; 
import Fastronaut from './Images/Fastronaut.png'; 
import Choreganizer from './Images/Choreganizer.png'; 
import Quizzap from './Images/Quizzap.png'; 
import Snapption from './Images/Snapption.png'
import TeacherTools from './Images/TeacherTools.png'; 

import GramminIcon from './Images/GramminIcon.png'; 
import Catmology from './Images/Catmology.png'; 

//Add web + video game portfolio in this route, then add other routes for commercials, books etc. 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header_class">
            <div className="right_nav_items">
              <ul>
                <li>About</li>
                <li>Games</li>
                <li>Acting/Modeling</li>
                <li>Books</li>
              </ul>
            </div>
        </div>
        <main className="main_body">

          <div className="intro_container">
            <img src={profile} alt=""/>
            <p>Ethan Hess</p>
            <p>Software Developer (iOS and Web) in San Francisco, CA</p>
            <p>Also traveller of the world, novelist, game designer, actor, model and some other things</p>
          </div>

          <div className="ios_work_container">
            <p>iOS Client Work</p>
          </div>

          <div className="first_tabs">
            <div className="container_first_one">
              <img src={Ilmatic} alt=""></img>
              <p>Ilmatic</p>
            </div>
            <div className="container_first_two">
              <img src={Hipervision} alt=""></img>
              <p>Hipervision</p>
            </div>
            <div className="container_first_three">
              <img src={ClokIcon} alt=""></img>
              <p>Clok</p>
            </div>
            <div className="container_first_four">
              <img src={Weedherb} alt=""></img>
              <p>Weedherb</p>
            </div>
          </div>

          <div className="ios_personal_container">
            <p>iOS Personal Work ~$ For Fun</p>
          </div>
          <div className="second_tabs">
            <div className="container_first_personal_one">
              <img src={Cosmologist} alt=""></img>
              <p>Cosmologist</p>
            </div>
            <div className="container_first_personal_two">
              <img src={Fastronaut} alt=""></img>
              <p>Fastronaut</p>
            </div>
            <div className="container_first_personal_three">
              <img src={Choreganizer} alt=""></img>
              <p>Choreganizer</p>
            </div>
            <div className="container_first_personal_four">
              <img src={Snapption} alt=""></img>
              <p>Snapption</p>
            </div>
          </div>
          <div className="third_tabs">
            <div className="container_second_personal_one">
              <img src={Catmology} alt=""></img>
              <p>Catmology</p>
            </div>
            <div className="container_second_personal_two">
              <img src={TeacherTools} alt=""></img>
              <p>Teacher Tools</p>
            </div>
            <div className="container_second_personal_three">
              <img src={Quizzap} alt=""></img>
              <p>Quizzap</p>
            </div>
            <div className="container_second_personal_four">
              <img src={GramminIcon} alt=""></img>
              <p>Grammin</p>
            </div>
          </div>
          <div className="web_personal_container">
            <p>Web Personal Work ~$ For Fun</p>
          </div>
          <div className="container_third_personal_one">
              {/* <img src={Catmology} alt=""></img> */}
              <p>This Website</p>
            </div>
            <div className="container_third_personal_two">
              {/* <img src={TeacherTools} alt=""></img> */}
              <p>Spacegram</p>
            </div>
            <div className="container_third_personal_three">
              {/* <img src={Quizzap} alt=""></img> */}
              <p>Code Planet</p>
            </div>
        </main>
        {/* <div className="footer">
          
          </div> */}
      </div>
    );
  }
}

export default App;
