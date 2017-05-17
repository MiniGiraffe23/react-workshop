import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: "home",
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.setState({
        page: event.target.id
      });
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
