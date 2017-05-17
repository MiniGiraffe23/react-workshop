import React, {Component} from 'react'

class ContactContent extends Component {
  render(){
    return(<div>
    	<div>
          <h1>Contact</h1>
          <p>by Carl Sagan</p>
        </div>
        <div>
        <p>I am probably due for a reread since I only remember like three things about this book? I really loved the movie when I was younger though.</p>
        </div>
      <div className="quote">
          <p>Probably should put a quote from the book here - <span>Carl Sagan</span> <em>Contact</em></p>
        </div>
      </div>)
  }
}

export default ContactContent;
