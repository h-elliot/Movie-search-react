import React from "react";
import { Movie } from "./Movie.js";
import "../App.css";
import { connect } from "react-redux";

const MovieBoard = ({ movies }) => {
  let moviesList = (
    <div id="moviesList">
      {movies.map(movie => {
        return <Movie {...movie} key={movie.imdbID} />;
      })}
    </div>
  );
  return (
    <div>
      <hr />
      <div>
        {moviesList}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { movies } = state;
  return {
    movies
  };
};

export default connect(mapStateToProps)(MovieBoard);
