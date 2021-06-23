import React, { Component } from "react";
import AppTitle from "./ListBookTitle";
import ListBooksContent from "./ListBooksContent";
import PropTypes, { object } from "prop-types";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(object),
    updateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="list-books">
        <AppTitle />
        <ListBooksContent
          books={this.props.books}
          updateBookShelf={this.props.updateBookShelf}
        />
      </div>
    );
  }
}

export default ListBooks;
