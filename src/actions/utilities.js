const axios = require("axios");

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getMovieIds = async movieName => {
  let url = encodeURI(
    `https://www.omdbapi.com/?apikey=${process.env
      .REACT_APP_API_KEY}&s=${movieName}`
  );

  let raw_data_for_url = await axios.get(url, axiosConfig);

  // Return empty array if no results with name
  if (raw_data_for_url.data.Response === "False") {
    return [];
  }

  let ids = raw_data_for_url.data.Search.map(movie => movie.imdbID);
  return ids;
};

export const getMovieDetails = async movieName => {
  let ids = await getMovieIds(movieName);

  // Return emptry array if no results
  if (ids.length === 0) {
    return [];
  }
  const movie_urls_with_ids = ids.map(id => {
    return encodeURI(
      `https://www.omdbapi.com/?apikey=${process.env
        .REACT_APP_API_KEY}&i=${id}&plot=full&tomatoes=true`
    );
  });

  let fullMovieData = movie_urls_with_ids.map(url => {
    return Promise.race([
      axios.get(url),
      new Promise(resolve => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          resolve(1);
        }, 5000);
        return timer;
      })
    ]);
  });

  return fullMovieData;
};
