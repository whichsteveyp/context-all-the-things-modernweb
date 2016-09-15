import React, { Component } from 'react';
import './App.css';
import Localization from 'react-localize';
import LocalizedButton from './LocalizedButton';
import DontUpdate from './DontUpdate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {
        welcome: 'Welcome to Netflix'
      }
    }

    this.updateMessages = this.updateMessages.bind(this);
  }

  updateMessages() {
    this.setState({
      messages: {
        welcome: `Changes ${Math.random()}`
      }
    });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Buttons Context Example</h2>
          <a href="https://github.com/sprjr/context-all-the-things-modernweb" className="App-intro">Repo on GitHub</a>
        </div>
        <p>
        <Localization messages={messages}>
          <span>
            <LocalizedButton message='welcome' onClick={this.updateMessages} />

            <DontUpdate>
              <LocalizedButton message='welcome' />
            </DontUpdate>

            <Localization messages={{ welcome: 'Welcome to Hulu, Shadowed Context Developer' }}>
              <LocalizedButton message='welcome' />
            </Localization>
          </span>
        </Localization>
        </p>
      </div>
    );
  }
}

export default App;
