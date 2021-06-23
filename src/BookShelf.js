import React, { Component } from "react";
import BookshelfBooks from "./BookshelfBooks";
import PropTypes, { object } from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(object),
    updateBookShelf: PropTypes.func.isRequired,
    shelfKey: PropTypes.string.isRequired,
    shelfs: PropTypes.object.isRequired,
  };
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
