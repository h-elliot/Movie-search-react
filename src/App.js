import React, { Component } from "react";
import "./App.css";
import { getMovieDetails } from "./movie.js";
import MovieBoard from "./components/MovieBoard.js";
import { Banner } from "./components/Banner.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  async getMovies() {
    // console.log("Value: "+this.input.value);
    // Normalize spaces with + to send to api
    let normalizedMovieTitle = this.input.value.replace(/\s/g, "+");
    let moviesData = await getMovieDetails(normalizedMovieTitle);

    let moviePromiseResolutions = await Promise.all(moviesData);
    let movies = moviePromiseResolutions.filter(
      movie => movie.Type === "movie"
    );
    this.setState((prevState, props) => {
      return {
        movies
      };
    });
  }

  render() {
    // console.log(this.state.movies);
    return (
      <div>
        <Banner />
        <input
          id="searchBox"
          className="form-control"
          type="text"
          ref={input => {
            this.input = input;
          }}
          onChange={() => this.getMovies()}
          placeholder="Search for movie here..."
        />
        <div>
          <MovieBoard movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
