import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Flex, Page, Box, BoxStyle } from './design_system/layouts/Layouts';
import { Type, TextBold } from './design_system/type/Type';

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
              <Type tag="h3"> A simple flexbox</Type>
            </Box>
            <Box boxStyle={BoxStyle.doubleSpace} ><Type boldness={TextBold.semibold}> Middle</Type></Box>
            <Box fullWidth={false}>and this goes to the right</Box>
          </Flex>
        </Page>
      </div>
    );
  } 
}

export default App;
