import React, { Component } from "react";
import BookShelfs from "./BookShelfsList";
import PropTypes, { object } from "prop-types";

class ListBooksContent extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(object),
    updateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="list-books-content">
        <BookShelfs
          books={this.props.books}
          updateBookShelf={this.props.updateBookShelf}
        />
      </div>
    );
  }
}

export default ListBooksContent;
