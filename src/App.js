import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'
import Footer from './components/Footer'
import loadscreen from './images/loading.gif'

// 1) Page
// 5) Content
// 6) Footer
// 7) Profile Card
// 9) Paragraph

class App extends Component {
  constructor(props) {
    super(props);
    this.navHandler = this.navHandler.bind(this);
    this.endGif = this.endGif.bind(this);
    this.state = {currentPage: 'Home', loading: false};
  }

  endGif() {
    this.setState({
      loading: false,
    });
  }
  componentDidMount(){
    this.setState({
      loading: true,
    });
    setTimeout(this.endGif, 5000 );
  }

  componentWillReceiveProps() {
    if (this.state.loading) {

    } else {null}
  }

  navHandler(e) {
    this.setState({
      currentPage: e.target.innerText,
    });
  }
  render() {
    if (this.state.loading) {
      return (<div className='loading'>
        <img src={loadscreen} className='loading'/>
        </div>
    )} else {
    return (
      <div className="App">
        <Navbar onClick={this.navHandler}/>
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content page={this.state.currentPage}/>
          </div>
        </div>
        <div className='container-fluid top-padding'>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>

      </div>
    )};
  }
}

export default App;
