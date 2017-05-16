import React, {Component} from 'react'
import ContentContent from './ContentContent'

class Content extends Component {
  render(){
    return( <div>
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
      <div>
        <ContentContent />
      </div>
      <div className="quote">
        <p>Quote - <span>Person</span> <em>Book</em></p>
      </div>
      </div>
      )
  }
}

export default Content;
