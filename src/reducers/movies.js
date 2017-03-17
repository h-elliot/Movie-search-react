import {getMovieDetails} from '../movie.js';
const movies = (state, action) => {
  switch(action.type) {
    case 'GET_MOVIES': {
      let movie = action.title;
      let data = getMovieDetails(movie);
      Promise.resolve(data)
            .then((data) => {
              return data.Search;
            })
            .catch((err) => {
              return err;
            })
    }
  }
}
