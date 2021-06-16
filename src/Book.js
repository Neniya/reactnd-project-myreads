import React, { Component } from "react";
import BookTop from "./BookTop";

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <BookTop book={book} />
        <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div>
      </div>
    );
  }
}
export default Book;
