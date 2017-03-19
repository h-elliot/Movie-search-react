const axios = require('axios');


const getMovieIds = (movieName) => {
  let url = `https://www.omdbapi.com/?s=${movieName}`;
    let getIds = axios.get(url)
        .then((response) => {
          let imdbIds = response.data.Search.map((movie) => {
            return movie.imdbID;
          })
          return imdbIds;
        })
        .catch(err => console.log(err));
  return getIds;
}


export const getMovieDetails = (movieName) => {
    let ids = getMovieIds(movieName);
    const fullDetails =  Promise.resolve(ids)
        .then((data) => {
        let urls = data.map((id) => {
          return `https://www.omdbapi.com/?i=${id}&plot=full&tomatoes=true`;
        })
        let movies = urls.map((url) => {
          return axios.get(url).then((response) => {
            return response.data;
        })
      })
      return movies;
    }).catch(err => console.log(err));
  return fullDetails;
}
