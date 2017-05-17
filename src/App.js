import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {

  constructor(props){
    super(props);

    this.delegateSomeStuff = this.delegateSomeStuff.bind(this);

    this.state = {
      page: "home"
    }

  }
  delegateSomeStuff(clickedThing) {
    this.setState({
      page: clickedThing
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">

        <Navbar doThis={this.delegateSomeStuff} />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content state={this.state.page} />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
