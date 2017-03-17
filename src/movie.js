const axios = require('axios');



export const getMovieDetails = (movieName) => {
 return axios.get('http://www.omdbapi.com/?s='+movieName)
   .then((response) => {
   return response.data;
 })
   .catch((err) => {
   return err;
 })
}
