import React, { Component } from "react";
import Author from "./Author";
import PropTypes from "prop-types";

class BookAuthors extends Component {
  static propTypes = {
    authors: PropTypes.array,
  };
  render() {
    return (
      <div className="book-authors">
        {this.props.authors &&
          this.props.authors.map((author) => (
            <Author key={author} author={author} />
          ))}
      </div>
    );
  }
}

export default BookAuthors;
