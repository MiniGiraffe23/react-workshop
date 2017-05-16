import React, {Component} from 'react'

class Quote extends Component {
  render(){
    return( <div className="quote"><p>{this.props.text}</p></div>
      )
  }
}

export default Quote;
