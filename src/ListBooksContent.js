import React, { Component } from "react";
import BookShelfs from "./BookShelf";

class ListBooksContent extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <BookShelfs books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default ListBooksContent;
