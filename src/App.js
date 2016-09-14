import React, { Component } from 'react';
import './App.css';
import Localization from 'react-localize';
import LocalizedButton from './LocalizedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Buttons Context Example</h2>
          <p className="App-intro">Let's show off what we learned.</p>
        </div>
        <p>
        <Localization messages={{ welcome: 'Welcome to Netflix'}}>
          <span>
            <LocalizedButton message='welcome' />
          </span>
        </Localization>
        </p>
      </div>
    );
  }
}

export default App;
