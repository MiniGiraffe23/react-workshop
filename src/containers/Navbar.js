import React, {Component} from 'react'
import logo from '../logo.svg';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  };

  onClick(event){
    this.props.click(event);
  };

  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline nav-left nav-list'>
              <li onClick={this.onClick} id='home'>Home</li>
              <li onClick={this.onClick} id='about'>About</li>
              <li onClick={this.onClick} id='contact'>Contact</li>
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
