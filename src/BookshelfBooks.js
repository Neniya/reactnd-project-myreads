import React, { Component } from "react";
import BooksGrid from "./Booksgrid";

class BookshelfBooks extends Component {
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
