import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <div className="footer text-center row p-4 font-weight-normal" >
      <div className="text-center">
        <a
          id="license"
          target="_blank"
          href="https://github.com/saisandeepvaddi/movie-search-react"
        >
          Github
        </a>
      </div>
      <div className="col love">
        Made with 💛 by &nbsp;
        <a
          id="my-twitter-id"
          target="_blank"
          href="https://twitter.com/saisandeepvaddi"
        >
          @saisandeepvaddi
        </a>
      </div>
      <div className="text-center">
        Licensed under &nbsp;
        <a
          id="license"
          target="_blank"
          href="https://github.com/saisandeepvaddi/movie-search-react/blob/master/LICENSE"
        >
          MIT
        </a>
      </div>
    </div>
  );
};
