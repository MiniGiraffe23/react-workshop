import React, {Component} from 'react'
import Heading from './Heading'
import headshot from '../images/headshot.jpg'

class ProfileCard extends Component {
  render(){
    return(<div className='profile-card'>
      <img src={headshot} className="App-logo" alt="Joe LeBeau" />
      <Heading mainHeader='Joe LeBeau' subHeader='Chicago-based developer with a passion for building meaningful things and connecting people'/>
    </div>)
  }
}

export default ProfileCard;
