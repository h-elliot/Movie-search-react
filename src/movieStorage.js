export let movies = [];

export const setMovies = (newMovies) => {
  movies = newMovies.filter((movie) => typeof movie !== 'undefined' );
}

export const getMovies = () => {
  return movies.length > 0 ? movies : [0];
}
