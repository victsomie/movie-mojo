import React, { Component } from 'react';
import Header from './Header';
//import logo from './logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="David's Movie Mojo App!"/>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
      
  }
}

export default App;
