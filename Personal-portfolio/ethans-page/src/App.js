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
                <li><button>About</button></li>
                <li><button>Games</button></li>
                <li><button onClick={()=> this.props.history.push('/acting')}>Acting / Modeling</button></li>
                <li><button>Books</button></li>
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
