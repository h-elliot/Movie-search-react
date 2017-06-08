import React from "react";
import "../App.css";
export const Movie = props => {

  // console.log(`${props.Title} IMDB Id: ${props.imdbID}. tomatoes: ${props.tomatoURL}`);
  
  
  let poster = props.Poster === "N/A"
    ? <img
        src="http://via.placeholder.com/170x250?text=Poster+N/A"
        className="img-thumbnail"
        alt={props.Title}
        height="250"
        width="170"
      />
    : <img
        src={props.Poster}
        alt={props.Title}
        className="img-thumbnail"
        height="250"
        width="170"
      />;
  let imdbURL = `http://www.imdb.com/title/${props.imdbID}/`;
  return (
    <div className="row movie-card">
      <div className="col-2">
        {poster}
      </div>
      <div className="col">
        <div>
          Title: {props.Title}
        </div>
        <div>
          Year: {props.Year}
        </div>
        <div>
          IMDB Rating: {props.imdbRating || `N/A`} <br />
        </div>
        <div className="plot-area">
          Plot: {props.Plot}
        </div>
        <div className="site-links">
          <a href={imdbURL} target="_blank">
            <button className="btn btn-sm btn-success">IMDb</button>{" "}
          </a>
          <a href={props.tomatoURL} target="_blank">
          {props.tomatoURL === 'N/A' ? <button className="btn btn-sm btn-success" disabled>
              Rotten Tomatoes N/A
            </button>
            :
            <button className="btn btn-sm btn-success">
              Rotten Tomatoes
            </button>
         }
            
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};
