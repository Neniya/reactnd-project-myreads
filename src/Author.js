import React, { Component } from "react";
import PropTypes from "prop-types";

class Author extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
  };
  render() {
    return <div>{this.props.author}</div>;
  }
}

export default Author;
