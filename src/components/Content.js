import React, {Component} from 'react'
import HomeContent from './HomeContent'
import AboutContent from './AboutContent'
import ContactContent from './ContactContent'

class Content extends Component {

  render(){


//So I recognize that if I'ma do this, I might as well shove literally everything into a content component, but w/e.
    if (this.props.state === "home") {
      return( <div>
        <div>
          <h1>Home</h1>
          <p>A subtitle</p>
        </div>
        <div>
          <HomeContent />
        </div>
        <div className="quote">
          <p>Quote - <span>Person</span> <em>Book</em></p>
        </div>
        </div>
        ) 
  } else if (this.props.state === "about"){
    return( 
        <AboutContent />
     ) 
  }else if (this.props.state === "contact"){
    return ( <ContactContent />)
  } else {
    return (
      <div>
          <h1>Oh no.</h1>
      </div>
      )
  }
  }
}

export default Content;
