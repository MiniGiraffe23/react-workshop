import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.contentTitle = "Home"
  }
  switchContent() {
    this.setState(() => ({
      contentTitle: "switched"
    }));
  }

  render() {
    return (
      <div className="App">

        <Navbar onClick={this.switchContent}/>

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard name="Tove and Simon, as a prairie dog"/>
          </div>
          <div className='col-md-8'>
            <Content title={this.contentTitle} />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
