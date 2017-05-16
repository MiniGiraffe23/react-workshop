import React, {Component} from 'react'
import Heading from './Heading'

class Content extends Component {
  render(){
    let pageContent = null;
    if (this.props.page === 'Home') {
      pageContent = <div>
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
        </div>;
      }
    else if (this.props.page === 'About') {
    pageContent = <div>
        <p>About Page</p>
      </div>;
    }
    return (<div>
      {pageContent}
    </div>);
  }
}

export default Content;
