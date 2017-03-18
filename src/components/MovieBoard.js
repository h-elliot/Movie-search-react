import React, { Component } from 'react';
import {Movie} from './Movie.js';

class MovieBoard extends Component {
  constructor(props) {
    super(props);
    // this.movies = [];
    this.state = {
      movies: []
    }
    this.dummyMovie = {
      Poster: "N/A",
      Title: "No Results",
      Type: "",
      Year: "",
      imdbID: ""
    }
  }
  componentWillReceiveProps(nextProps) {
    // Make the movie list as empty array when the results are not there which gives undefined object
    this.setState((prevState, props) => {
      return {
        movies: typeof nextProps.movies !== 'undefined' ? nextProps.movies:[]
      }
    })
    // this.movies = typeof nextProps.movies !== 'undefined' ? nextProps.movies:[] ;
  }
  render() {
    //Prepare Movies to render
    let moviesList = <div className="row"> {this.state.movies.map((movie) => {
      return (
        <Movie {...movie} key={movie.imdbID}/>
      );
    })} </div>;
      return (
      <div className="well">
        {/* {moviesList.length > 0 ? moviesList : <h1>No Movies found</h1>} */}
        {moviesList}
      </div>
    );
  }
}


export default MovieBoard;
