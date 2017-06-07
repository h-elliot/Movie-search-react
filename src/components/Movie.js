import React from 'react';

export const Movie = (props) => {
  let poster = props.Poster === 'N/A' ? <img src="http://via.placeholder.com/170x250?text=Poster+N/A" alt={props.Title} height="250" width="170" /> : <img src={props.Poster} alt={props.Title} height="250" width="170" />;
  let imdbURL = `http://www.imdb.com/title/${props.imdbID}/`;
  return (
    <div className="col-md-3">
      {poster} <br/>
      {props.Title} - {props.Year}  <br/>
      IMDB Rating: {props.imdbRating} <br/>
      Plot: {props.Plot} <br/>
      <a href={imdbURL} target="_blank"> <button className="btn btn-sm btn-success">IMDb</button> </a>
      <a href={props.tomatoURL} target="_blank"> <button className="btn btn-sm btn-success">Rotten Tomatoes</button> </a>
      <hr />
    </div>
  );
}
