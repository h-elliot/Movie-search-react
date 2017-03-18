import React from 'react';

export const Movie = ({Poster, Title, Type, Year, imdbID}) => {
  let poster = Poster === 'N/A' ? <img src="" alt={Title} height="250" width="170" /> : <img src={Poster} alt={Title} height="250" width="170" />
  return (
    <div className="col-md-3">
      {poster} <br/>
      {Title} <br/>
      {Type} <br/>
      {Year} <br/>
      {imdbID} <br/>
    </div>
  );
}
