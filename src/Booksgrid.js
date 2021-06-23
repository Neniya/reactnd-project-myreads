import React, { Component } from "react";
import Book from "./Book";
import PropTypes, { object } from "prop-types";

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(object),
    updateBookShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string,
    isShelf: PropTypes.bool.isRequired,
    whichShelf: PropTypes.func,
  };

  render() {
    const filterBooks = this.props.isShelf
      ? this.props.books.filter((book) => book.shelf === this.props.shelf)
      : this.props.books;
    return (
      <ol className="books-grid">
        {filterBooks.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              updateBookShelf={this.props.updateBookShelf}
              whichShelf={this.props.whichShelf}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default BooksGrid;
