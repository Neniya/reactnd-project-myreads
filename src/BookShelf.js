import React, { Component } from "react";
import BookshelfBooks from "./BookshelfBooks";

class BookShelf extends Component {
  render() {
    const shelfKey = this.props.shelfKey;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfs[shelfKey]}</h2>
        <BookshelfBooks
          shelf={shelfKey}
          books={this.props.books}
          updateBookShelf={this.props.updateBookShelf}
        />
      </div>
    );
  }
}
export default BookShelf;
