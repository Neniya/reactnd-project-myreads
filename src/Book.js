import React, { Component } from "react";
import BookTop from "./BookTop";
import BookTitle from "./BookTitle";
import BookAuthors from "./BookAuthors";

class Book extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <BookTop book={book} />
        <BookTitle title={book.title} />
        <BookAuthors authors={book.authors} />
      </div>
    );
  }
}
export default Book;
