import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './App.css';
import routes from './routes.js'; 
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

//Icons (maybe group in divs by four?)

import theUser from './Images/female_user.png'; 
import homeImage from './Images/blue_circle.png';


//Add web + video game portfolio in this route, then add other routes for commercials, books etc. 

class App extends Component {
  constructor() { //TD add props
    super()
    this.state = {
      isToggled: false
    }
  }

  toggleMenuHandler = () => {
    this.setState({ isToggled: !this.state.isToggled })
    console.log('this.state.isToggled', this.state.isToggled)
  }

  //Move this to own component
  render() {

    const props = {
      startStyle: { opacity: 0 },
      endStyle: { opacity: 1 }
    }

    return (
      <div className="App">
        <div className="header_class">
            <img onClick={() => this.props.history.push('/')} src={homeImage}/>
            <div className="left_nav_items">  
              <ul>
                <li><img src={ theUser }/></li>
                <li><button onClick={() => this.props.history.push('/login')}>Login</button></li>
              </ul>
            </div>
            <div className="right_nav_items">
              <button onClick={() => this.toggleMenuHandler()}>~$ Explore</button>
              { this.state.isToggled === true ? <Animate play {...props} className="toggle_container">
                <button>About</button>
                <button onClick={()=> this.props.history.push('/acting')}>Acting / Modeling</button>
                <button onClick={()=> this.props.history.push('/books')}>Books</button>
                <button onClick={()=> this.props.history.push('/games')}>Games</button>
              </Animate> : <div></div> }
              {/* <ul>

                //TODO add client portal to list, if user is logged in

                <li><button>About</button></li>
                <li><button>Games</button></li>
                <li><button onClick={()=> this.props.history.push('/acting')}>Acting / Modeling</button></li>
                <li><button>Books</button></li>
              </ul> */}
            </div>
        </div>
        <main className="main_body">
          { routes }
        </main>
        {/* <div className="footer">
          
          </div> */}
      </div>
    );
  }
}

//TODO add redux
export default withRouter(App);
