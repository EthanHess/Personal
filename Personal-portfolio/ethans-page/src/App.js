import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './App.css';
import routes from './routes.js'; 

//Icons (maybe group in divs by four?)

import theUser from './Images/female_user.png'; 


//Add web + video game portfolio in this route, then add other routes for commercials, books etc. 

class App extends Component {
  constructor() { //TD add props
    super()
    this.state = {

    }
  }

  //Just use LINK for the rest
  toActingAndModeling = () => {
    this.props.history.push('/acting')
  }

  //Move this to own component

  render() {
    return (
      <div className="App">
        <div className="header_class">
            <div className="left_nav_items">
              <ul>
                <li><img src={ theUser }/></li>
                <li><button onClick={() => this.props.history.push('/login') }>Login</button></li>
              </ul>
            </div>
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
