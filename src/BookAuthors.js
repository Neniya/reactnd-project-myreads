import React, { Component } from "react";
import Author from "./Author";

class BookAuthors extends Component {
  render() {
    return (
      <div className="book-authors">
        {this.props.authors.map((author) => (
          <Author key={author} author={author} />
        ))}
      </div>
    );
  }
}

export default BookAuthors;
