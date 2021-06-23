import React, { Component } from "react";
import BookTop from "./BookTop";
import BookTitle from "./BookTitle";
import BookAuthors from "./BookAuthors";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    whichShelf: PropTypes.func,
  };
  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <BookTop
          book={book}
          updateBookShelf={this.props.updateBookShelf}
          whichShelf={this.props.whichShelf}
        />
        <BookTitle title={book.title} />
        <BookAuthors authors={book.authors} />
      </div>
    );
  }
}
export default Book;
