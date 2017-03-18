import React from 'react';

export const Movie = ({Poster, Title, Type, Year, imdbID}) => {
  let poster = Poster === 'N/A' ? <img src="" alt={Title} height="100" width="75" /> : <img src={Poster} alt={Title} height="100" width="75" />
  return (
    <div className="col-md-3">
      <ul>
        <li>{poster}</li>
        <li>{Title}</li>
        <li>{Type}</li>
        <li>{Year}</li>
        <li>{imdbID}</li>
      </ul>
    </div>
  );
}
