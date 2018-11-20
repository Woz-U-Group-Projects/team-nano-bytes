import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Planets from './components/Planets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        Hello World

        <Planets uri="http://localhost:3001/staticPlanets"/>

        {/* //Add the following code */}
        <hr />
        <Planets uri="http://localhost:3001/planets"/>
      </div>
    );
  }
}

export default App;