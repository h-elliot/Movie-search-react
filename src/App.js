import React, { Component } from "react";
import "./App.css";
import { fetchMovies } from "./actions";
import { connect } from "react-redux";
import MovieBoard from "./components/MovieBoard.js";
import { Banner } from "./components/Banner.js";
import { Footer } from "./components/Footer.js";
import Message from "./components/Message";
import debounce from "lodash/debounce";

class App extends Component {
  componentDidMount() {
    this.input.focus();
  }

  getMovies() {
    const movieName = this.input.value;
    const { fetchMovies } = this.props;
    fetchMovies(movieName);
  }

  getDisplay() {
    return this.props.message
      ? <Message message={this.props.message} />
      : <MovieBoard movies={this.props.movies} />;
  }

  render() {
    return (
      <div>
        <Banner />
        <input
          id="searchBox"
          className="form-control"
          type="text"
          ref={input => {
            this.input = input;
          }}
          onChange={debounce(this.getMovies.bind(this), 500, {
            leading: false,
            trailing: true
          })}
          placeholder="Search for a movie here..."
        />
        <div>
          {this.getDisplay()}
        </div>
        <hr />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies ? state.movies : [],
    message: state.message
  };
};

const mapDispatchToProps = {
  fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
