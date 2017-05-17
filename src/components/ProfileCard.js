import React, {Component} from 'react'
import cool from '../../images/cool.png';

class ProfileCard extends Component {
  render(){
    return( <div>
              <img src={cool} className="prof-pic" alt="cool" />
              <h3>Stacy Curry</h3>
              <p>Direct trade selvage gentrify distillery authentic readymade, hammock hot chicken pickled hexagon chambray hoodie sriracha cray.</p>
            </div>)
  }
}

export default ProfileCard;
