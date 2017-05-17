import React, {Component} from 'react'

class InfoList extends Component {
  render(){
    return( <div className="info-list">
              <ul>
                <li className="question">Where am I located?</li>
                <li className="answer">{this.props.answer_1}</li>
                <li className="question">What am I working on?</li>
                <li className="answer">{this.props.answer_2}</li>
              </ul>
            </div>
      )
  }
}

export default InfoList;
