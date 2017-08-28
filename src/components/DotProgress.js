import React, { Component } from "react";

class DotSpinner extends Component {
  state = {
    numDots: 1,
    dots: "."
  };
  componentDidMount() {
    this.dotsArray = [".", "..", "..."];
    this.dotInterval = setInterval(() => {
      if (this.state.numDots <= 3) {
        this.setState(prevState => ({
          numDots: prevState.numDots + 1,
          dots: this.dotsArray[prevState.numDots - 1]
        }));
      } else {
        this.setState({
          numDots: 1,
          dots: "."
        });
      }
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.dotInterval);
  }
  render() {
    return (
      <span>
        {this.state.dots}
      </span>
    );
  }
}

export default DotSpinner;
