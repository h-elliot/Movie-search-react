import React from "react";

export const Movie = props => {
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
    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
      <div>
        {poster}
      </div>
      <div>
        {props.Title} - {props.Year} <br />
      </div>
      <div>
        IMDB Rating: {props.imdbRating || `N/A`} <br />
      </div>
      <div className="plot-area">
        Plot: {props.Plot} <br />
      </div>
      <div className="site-links">
        <a href={imdbURL} target="_blank">
          <button className="btn btn-sm btn-success">IMDb</button>{" "}
        </a>
        <a href={props.tomatoURL} target="_blank">
          <button className="btn btn-sm btn-success">Rotten Tomatoes</button>
        </a>
      </div>
      <hr />
    </div>
  );
};
