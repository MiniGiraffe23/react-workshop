import React, {Component} from 'react'
import logo from '../logo.svg';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.clickedThing = this.clickedThing.bind(this);

  }
  clickedThing(event) {
    this.props.doThis(event.target.id);
  }

  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline nav-left nav-list'>
              <li onClick={this.clickedThing} id='home'>Home</li>
              <li onClick={this.clickedThing} id='about'>About</li>
              <li onClick={this.clickedThing} id='contact'>Contact</li>
            </ul>
            <div className='brand'>
              <img src={logo} className="App-logo" alt="logo" />
              <h4>React Workshop Profile Page</h4>
            </div>
          </div>
        </div>
      </nav>
      )
  }
}

export default Navbar
