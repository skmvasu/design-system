import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Flex } from './design_system/layouts/Layouts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build a design system with React</h1>
        </header>
        <Flex lastElRight={true}>
          <div>
            A simple flexbox
          </div>
          <div>and this goes to the right</div>
        </Flex>
      </div>
    );
  }
}

export default App;
