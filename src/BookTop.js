import React, { Component } from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

class BookTop extends Component {
  render() {
    return (
      <div className="book-top">
        <BookCover book={this.props.book} />
        <BookShelfChanger />
      </div>
    );
  }
}

export default BookTop;
