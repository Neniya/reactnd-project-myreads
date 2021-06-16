import React, { Component } from "react";
import AppTitle from "./ListBookTitle";
import ListBooksContent from "./ListBooksContent";

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <AppTitle />
        <ListBooksContent books={this.props.books} />
      </div>
    );
  }
}

export default ListBooks;
