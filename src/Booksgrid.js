import React, { Component } from "react";
import Book from "./Book";

class BooksGrid extends Component {
  render() {
    const filterBooks = this.props.isShelf
      ? this.props.books.filter((book) => book.shelf === this.props.shelf)
      : this.props.books;
    return (
      <ol className="books-grid">
        {filterBooks.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    );
  }
}

export default BooksGrid;
