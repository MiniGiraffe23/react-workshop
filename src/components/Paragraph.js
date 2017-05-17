import React, {Component} from 'react'

class Section extends Component {
  render() {
    return(<div>
      var FAQ = this.props.FAQ

      <ul>
        { FAQ.map(function(name))}
      </ul>

      <p>{this.props.parapraph}</p>

    </div>)
  }
}
