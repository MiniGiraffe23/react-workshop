import React, {Component} from 'react'

class Bio extends Component {
  render(){
    return( <div className="bio"><p>{this.props.text}</p></div>
      )
  }
}

export default Bio;
