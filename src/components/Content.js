import React, {Component} from 'react'
import Heading from './Heading'

class Content extends Component {
  render(){
    if (this.props.page === 'Home') {
      return(<div>
        <Heading mainHeader='Home' subHeader="Hi, I'm Joe. Web Developer, live music enthusiast, and lifelong learner" />
        <br/>
        <div className='FAQ' >
          <p className='bold'>Where am I located?</p>
          <p>Chicago, IL</p>
          <p className='bold'>What do I work in?</p>
          <p>Ruby on Rails, React, Javascript & HTML/CSS</p>
          <p className='bold'>What is my favorite band?</p>
          <p>Sound Tribe Sector 9</p>
        </div>
              <br/>
        <p>This is the body paragraph of my content component. Once this app is actually functional, there will be actual info about me here instead of this placeholder. This is the body paragraph of my content component. Once this app is actually functional, there will be actual info about me here instead of this placeholder. This is the body paragraph of my content component. Once this app is actually functional, there will be actual info about me here instead of this placeholder.</p>
        </div>)
      }
    else if (this.props.page === 'About') {
      return(<div>
        <p>About Page</p>
      </div>)
    }
    else if (this.props.page === 'Contact') {
      return(<div>
        <h1>Contact</h1>
        <p>GitHub: <a href="https://www.github.com/joelebeau1">www.github.com/joelebeau1</a></p>
        <p>Email: <a href="mailto:joseph.p.lebeau@gmail.com">joseph.p.lebeau@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/josephlebeau">www.linkedin.com/in/josephlebeau</a></p>
      </div>)
    }
  }
}

export default Content;
