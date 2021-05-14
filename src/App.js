import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [
        {name: 'Frankenstein'},
        {name: 'Dracula'},
        {name: 'Zombie'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello world!
      </header>
    </div>
    )
  }
}

export default App;
