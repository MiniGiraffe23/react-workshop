import React, {Component} from 'react'

class Content extends Component {
  render(){
    if (this.props.showContent === "home") {
      return(<div>
          <div>
            <h1>{this.props.title}</h1>
            <p>I have expertise dealing with Pythons, ground breaking web technologies and downward vertical slices. Strong proficiency in database administration and cryptology.</p>
          </div>

          <div>
            My approach to web development is highly informed by my education in ecology and hoarding. I have ample personal experience in teamwork, foraging, pivoting to new projects.
          </div>
        </div>)
      } else if (this.props.showContent === "about") {
        return(<div>
          <h1>About</h1>
            <div>
              <h4>Where am I located?</h4>
              <p>Home is on the range</p>
              <h4>What is my approach to tackling a new project?</h4>
              <p>Gopher the hardest part first.</p>
              <h4>What is my favorite restaurant?</h4>
              <p>Panera. Nice salads.</p>
            </div>
        </div>)
      } else {
        return(<div>
          <h1>Contact</h1>
            <p>"I'll find you."</p>
        </div>)
      }
  }
}

export default Content;
