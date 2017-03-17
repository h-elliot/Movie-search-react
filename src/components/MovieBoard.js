import React, { Component } from 'react';


class MovieBoard extends Component {
  constructor(props) {
    super(props);
    this.movies = [];
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.movies = typeof nextProps.movies !== 'undefined' ? nextProps.movies:[] ;
  }
  render() {
    let movieList = this.movies.map((movie) => {
      return <li key={movie.imdbID}>{movie.Title}</li>
    });
    return (
      <ul>
        {movieList.length > 0 ? movieList : <h1>No Movies found</h1>}
      </ul>
    );
  }
}


export default MovieBoard;
