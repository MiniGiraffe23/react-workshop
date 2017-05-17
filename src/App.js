import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: "Home",
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(page) {
    if (page === "home") {
      this.setState({
        page: "Home"
      });
    } else if (page === "about") {
        this.setState({
        page: "About"
      });
    } else if (page === "contact") {
        this.setState({
        page: "Contact"
      });
    };
  };

  render() {
    return (
      <div className="App">

        <Navbar click={this.handleClick} />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content page={this.state.page}/>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
