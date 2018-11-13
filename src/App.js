import React, { Component } from 'react';
import './App.css';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {
  render() {
      
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}

export default App;
