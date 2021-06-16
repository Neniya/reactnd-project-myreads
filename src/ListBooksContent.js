import React, { Component } from "react";
import BookShelfs from "./BookShelfsList";

class ListBooksContent extends Component {
  render() {
    return (
      <div className="list-books-content">
        <BookShelfs books={this.props.books} />
      </div>
    );
  }
}

export default ListBooksContent;
