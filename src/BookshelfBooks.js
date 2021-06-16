import React, { Component } from "react";
import Book from "./Book";

class BookshelfBooks extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books
            .filter((book) => book.shelf === this.props.shelf)
            .map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
export default BookshelfBooks;
