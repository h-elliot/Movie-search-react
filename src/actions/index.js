import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS
} from "../constants";

import { getMovieDetails } from "./utilities";

export const fetchRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
    payload: "Searching for movies"
  };
};

export const fetchFailure = error => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  };
};

export const fetchSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  };
};

const getMovies = async moviesName => {
  const multipleMoviePromises = await getMovieDetails(moviesName);

  console.log(`Promise Length: ${multipleMoviePromises.length}`);

  const movies = await Promise.all(multipleMoviePromises).catch(e =>
    console.log("Error fetching movies")
  );

  const filteredMovies = movies.filter(movie => movie !== 1);

  console.log(`Movies Length: ${filteredMovies.length}`);

  return filteredMovies.length > 0 ? filteredMovies : [];
};

export const fetchMovies = movieName => {
  return dispatch => {
    dispatch(fetchRequest());
    movieName === ""
      ? dispatch(fetchFailure("Search for movies"))
      : getMovies(movieName.toLowerCase())
          .then(movies => {
            movies.length === 0
              ? dispatch(fetchFailure("No Movies Found"))
              : dispatch(fetchSuccess(movies));
          })
          .catch(err => dispatch(fetchFailure("No Movies Found")));
  };
};
