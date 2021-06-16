import React, { Component } from "react";

class BookCover extends Component {
  render() {
    console.log(this.props.book.imageLinks.smallThumbnail);
    return (
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: this.props.book.imageLinks.smallThumbnail,
        }}
      />
    );
  }
}

export default BookCover;
