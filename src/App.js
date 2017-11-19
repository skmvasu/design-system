import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Flex, Page, Box, BoxStyle } from './design_system/layouts/Layouts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build a design system with React</h1>
        </header>
        <Page>
          <Flex lastElRight={true}>
            <Box boxStyle={BoxStyle.doubleSpace} >
              A simple flexbox
            </Box>
            <Box boxStyle={BoxStyle.doubleSpace} >Middle</Box>
            <Box fullWidth={false}>and this goes to the right</Box>
          </Flex>
        </Page>
      </div>
    );
  } 
}

export default App;
