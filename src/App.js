import React, { Component } from 'react';
import './App.css';
import {getMovieDetails} from './movie.js';
import MovieBoard from './components/MovieBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  getMovies() {
    let data = getMovieDetails(this.input.value);
    Promise.resolve(data)
          .then((data) => {
            this.setState((prevState, props) => {
              return {
                movies: data.Search
              }
            })
          })
          .catch((err) => {
            console.log(err);
          })
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => {this.input = input; }} onChange={() => this.getMovies()} />
        <MovieBoard movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
