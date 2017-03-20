import React, { Component } from 'react';
import './App.css';
import {getMovieDetails} from './movie.js';
import MovieBoard from './components/MovieBoard.js';
import {Banner} from './components/Banner.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.input.focus();
  }

  getMovies() {
    // console.log("Value: "+this.input.value);
    // Normalize spaces with + to send to api
    let normalizedMovieTitle = this.input.value.replace(/\s/g,"+");
    let movies = getMovieDetails(normalizedMovieTitle);
    Promise.resolve(movies)
          .then((data) => {
            this.setState((prevState, propse) => {
              return {
                movies: []
              }
            });
            data.forEach((moviePromise) => {
              Promise.resolve(moviePromise)
                .then((data) => {
                    this.setState((prevState, props) => {
                      if (data.Type === 'movie') {
                        return {
                          movies: [...prevState.movies, data]
                        }
                      }
                    });
                })
                .catch(err => console.log(err));
          })
        })
         .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.movies);
    return (
      <div>
        <Banner />
        <input id="searchBox" className="form-control" type="text" ref={(input) => {this.input = input; }} onChange={() => this.getMovies()} placeholder="Search for movie here..." />
        <div>
          <MovieBoard movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
