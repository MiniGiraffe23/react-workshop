import React, {Component} from 'react'

class Heading extends Component {
  render() {
    return(
      <div className='heading'>
      <h1>
        {this.props.mainHeader}
      </h1>
      <h5>
        {this.props.subHeader}
      </h5>
      </div>

      )
  }
}

export default Heading
