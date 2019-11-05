import React, {Component} from 'react';
import styled from "styled-components";
import Step1 from './components/Step1/Step1.js'
import Step2 from './components/Step2/Step2.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  
  render() {
    return (
      <div className="App">
      <Step1>
      </Step1>
      </div>
    );
  }
}

export default App;