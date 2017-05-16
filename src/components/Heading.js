import React, {Component} from 'react'

class Heading extends Component {
  render() {
    return(
      <div className='heading'>
      <h1>
        {this.props.mainHeader}
      </h1>
      <p>
        {this.props.subHeader}
      </p>
      </div>

      )
  }
}

export default Heading
