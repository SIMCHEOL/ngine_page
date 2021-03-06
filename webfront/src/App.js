import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { el: ['test item'] }
  }

  componentDidMount() {
    fetch('/test')
        .then(res => res.json())
        .then(data => this.setState({el:data}));
  }


  render() {
    console.log(this.state.el)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
