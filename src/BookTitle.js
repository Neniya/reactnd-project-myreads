import React, { Component } from "react";
import PropTypes from "prop-types";

class BookTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return <div className="book-title">{this.props.title}</div>;
  }
}

export default BookTitle;
