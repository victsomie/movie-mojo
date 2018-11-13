import React, { Component } from 'react';
import Header from './Header';
import Movie from './Movie';
//import logo from './logo.svg';
import '../App.css';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';


class App extends Component {
    constructor() {
      super();

      this.state = {
        movies: initialMovies
      };
    }
    
  render() {
    return (
      <div className="App">
        <Header text="David's Movie Mojo App!"/>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <div className="movies">
            {
            Object
                .keys(this.state.movies)
                .map(key => <Movie key={key} meta={this.state.movies[key]} />)
            }

        </div>
      </div>
    );
      
  }
}

export default App;
