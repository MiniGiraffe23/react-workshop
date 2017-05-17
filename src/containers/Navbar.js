import React, {Component} from 'react'
import logo from '../logo.svg';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.homeClick = this.homeClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
  };

  homeClick(){
    this.props.click("home");
  };

  aboutClick(){
    this.props.click("about");
  };

  contactClick(){
    this.props.click("contact");
  };

  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline nav-left nav-list'>
              <li onClick={this.homeClick} id='home'>Home</li>
              <li onClick={this.aboutClick} id='about'>About</li>
              <li onClick={this.contactClick} id='contact'>Contact</li>
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
