import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResetCss from './reset'
import App from './App'

class Container extends Component {
  render(){
    return (
      <div>
        <ResetCss />
        <App></App>
      </div>
    )
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));