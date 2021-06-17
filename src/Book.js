import React, { Component } from "react";
import BookTop from "./BookTop";
import BookTitle from "./BookTitle";

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <BookTop book={book} />
        <BookTitle title={book.title} />
        <div className="book-authors">Harper Lee</div>
      </div>
    );
  }
}
export default Book;
