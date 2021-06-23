import React, { Component } from "react";
import BooksGrid from "./Booksgrid";
import PropTypes, { object } from "prop-types";

class BookshelfBooks extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(object),
    updateBookShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="bookshelf-books">
        <BooksGrid
          shelf={this.props.shelf}
          books={this.props.books}
          isShelf={true}
          updateBookShelf={this.props.updateBookShelf}
        />
      </div>
    );
  }
}
export default BookshelfBooks;
