import React, {Component} from 'react'
import profilePic from '../profile-pic.jpg';

class ProfileCard extends Component {
  render(){
    return(<div>
      <img src={profilePic} className="App-profile-pic" alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <p>We like going down rabbit holes!</p>
        </div>
      </div>)
  }
}

export default ProfileCard;
