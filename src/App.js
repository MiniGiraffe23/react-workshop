import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'
import Footer from './components/Footer'

// 1) Page
// 5) Content
// 6) Footer
// 7) Profile Card
// 9) Paragraph

class App extends Component {
  constructor(props) {
    super(props);
    this.navHandler = this.navHandler.bind(this);
    this.currentPage = 'Home';
  }

  navHandler() {
    console.log(this.currentPage);
    this.currentPage = 'About';
    console.log(this.currentPage);
  }
  render() {
    return (
      <div className="App">

        <Navbar onClick={this.navHandler}/>

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content page={this.currentPage}/>
          </div>
        </div>
        <div className='container-fluid top-padding'>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
