import React from 'react';

export const Movie = (props) => {
  let poster = props.Poster === 'N/A' ? <img src="" alt={props.Title} height="250" width="170" /> : <img src={props.Poster} alt={props.Title} height="250" width="170" />
  return (
    <div className="col-md-3">
      {poster} <br/>
      {props.Title} <br/>
      {props.Type} <br/>
      {props.Year} <br/>
      {props.imdbID} <br/>
    </div>
  );
}
