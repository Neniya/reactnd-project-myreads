import React, { Component } from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

class BookTop extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    whichShelf: PropTypes.func,
  };

  render() {
    return (
      <div className="book-top">
        <BookCover book={this.props.book} />
        <BookShelfChanger
          book={this.props.book}
          updateBookShelf={this.props.updateBookShelf}
          whichShelf={this.props.whichShelf}
        />
      </div>
    );
  }
}

export default BookTop;
