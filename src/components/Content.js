import React, {Component} from 'react'

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

class Content extends Component {
  render(){
    if (this.props.page === "home") {
      return( <div>
              <Home />
            </div>)
    } else if (this.props.page === "about") {
      return( <div>
              <About />
            </div>)
    } else if (this.props.page === "contact") {
      return( <div>
              <Contact />
            </div>)
    };
  };
};

export default Content;

