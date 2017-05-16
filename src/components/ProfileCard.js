import React, {Component} from 'react'
import Heading from './Heading'

class ProfileCard extends Component {
  render(){
    return(<div className='profile-card'>

      <Heading mainHeader='Joe LeBeau' subHeader='Chicago-based developer with a passion for building meaningful things and connecting people'/>
    </div>)
  }
}

export default ProfileCard;
