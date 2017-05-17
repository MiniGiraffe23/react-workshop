import React, {Component} from 'react'
import ProfileContent from './ProfileContent'

class ProfileCard extends Component {
  render(){
    return(<div>
      <img className="profile-img" src='http://68.media.tumblr.com/106a9c3559e9e3cd8580e3559f3d473f/tumblr_ol75ppjJBT1sm41mbo1_1280.jpg' alt="don't panic" />
      <ProfileContent />
      </div>)
  }
}

export default ProfileCard;
