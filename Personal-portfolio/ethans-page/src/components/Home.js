import React, { Component } from 'react';
import './Home.css';

import Ilmatic from '..//Images/Ilmatic.png'; 
import Hipervision from '..//Images/Hipervision_new.png'; 
import ClokIcon from '..//Images/ClokIcon.png'; 
import Weedherb from '..//Images/Weedherb.png'; 

import Cosmologist from '..//Images/Cosmologist.png'; 
import Fastronaut from '..//Images/Fastronaut.png'; 
import Choreganizer from '..//Images/Choreganizer.png'; 
import Quizzap from '..//Images/Quizzap.png'; 
import Snapption from '..//Images/Snapption.png'
import TeacherTools from '..//Images/TeacherTools.png'; 

import GramminIcon from '..//Images/GramminIcon.png'; 
import Catmology from '..//Images/Catmology.png'; 

import profile from '..//Images/profile_pic.jpg'; 
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router-dom';
import Typing from 'react-typing-animation';

import spacePicForBackground from '..//Images/earthsunrise.jpg'; 
import naturePicForBackground from '..//Images/natureMainBackground.jpg'; 

import emailPic from '..//Images/emailIcon.png'; 
import phonePic from '..//Images/phoneIcon.png'; 

//Redux 
import { spaceTheme, natureTheme } from '../ducks/reducer'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        //TODO add props
        this.state = {
          theme: "SPACE"
        }
    }

    //On load
    componentDidMount() { 

    }

    //State change (these will be deprecated soon, update)
    componentWillUpdate() {
      console.log("--- HOME.js hit ---", this.props, this.state)
      //Props working correctly from Redux but state needs to be updated
    }

    //Cannot set state in "will update" due to infinite loop, this is the correct place to do so
    componentWillReceiveProps() {
      const { theme } = this.props
      console.log("--- HOME js nature/space value fetched", this.props["theme"], theme) //These do the same thing
      this.stateSetWrapperFromUpdateComponent(theme)
    }

    stateSetWrapperFromUpdateComponent = (val) => {
        this.setState({ theme: val })
    }

    componentDidUpdate() {

    }

    render() {

      //NOTE theme gets updated incorrectly, check this

        //Could use ID instead of class name if not going to reuse
        const { theme } = this.state
        console.log("THEME HOME JS RENDER", theme)

        //PASS BG to CSS

        const natureURL = '..//Images/natureMainBackground.jpg'
        const spaceURL = '..//Images/earthsunrise.jpg'
        // style={{backgroundImage: theme === "NATURE" ? `url("${natureURL}")` : `url("${spaceURL}")`}}
        const BG = theme === "NATURE" ? naturePicForBackground : spacePicForBackground
        // const BG = theme === "NATURE" ? natureURL : spaceURL
        // const BG = theme === "NATURE" ? `url('${natureURL}')` : `url('${spaceURL}')`
        //style={{backgroundImage: BG}}

        //'url('+ imgUrl + ')'

        console.log('BG + THEME', BG, theme)

        return (
            <div>
            <div className="intro_container">
            <div className="flip_container">
              <div className="front">
                <img src={profile} alt=""/>
              </div>
              <div className="back">
                <button onClick={()=> window.open("//www.linkedin.com/in/ethan-hess-91000851/", "_blank")}>LinkedIn</button>
                <button onClick={()=> window.open("//www.instagram.com/eh8891/", "_blank")}>Instagram</button>
              </div>
            </div>
            <Typing className="type_header_top"> Ethan Hess </Typing>
            <p>Software Developer (iOS and Web) in San Francisco, CA</p>
            <p>Also traveler of the world, novelist, game designer, actor, model and some other things</p>
          </div>
{/* style={{backgroundColor: theme === "NATURE" ? `white` : `rgb(10, 2, 51)`}} */}
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
          <div className="web_parent_wrapper">
            <div className="web_parent_container">
              <div className="web_container_third_personal_one">
                <p>This Website, a react app, which I coded - No link needed obviously ;) -</p>
              </div>
              <div className="web_container_third_personal_two">
                <p>Code Planet</p>
              </div>
              <div className="web_container_third_personal_three">
                <p>Spacegram</p>
              </div>
            </div>
          </div>
          <div className="footer_view">
            <div id="footer_oval">
              {/* Add hours?  */}
                <div id="title_container">
                    <p>Serving Silicon Valley Since 2015</p>
                    <p>Questions? Comments?</p>
                    <p>Hours: 9 a.m. - 5 p.m. Pacific Time</p>
                </div>
                <div id="contact_container">
                  <div id="phone_container">
                      <img src={phonePic} alt=""></img>
                      <p>610-715-4335</p>
                  </div>
                  <div id="email_container">
                  {/* Add new address + phone, not personal? */}
                      <img src={emailPic} alt=""></img>
                      <p>ech1988@gmail.com</p>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  const { theme } = state
  return { theme }
}

export default withRouter(connect(mapStateToProps, {natureTheme, spaceTheme})(Home)); 

//export default withRouter(Home)
//export default withRouter(connect(mapStateToProps, { natureTheme, spaceTheme })(App));