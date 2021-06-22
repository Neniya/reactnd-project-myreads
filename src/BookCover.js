import React, { Component } from "react";

class BookCover extends Component {
  render() {
    return (
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${
            "imageLinks" in this.props.book
              ? this.props.book.imageLinks.smallThumbnail
              : this.props.book.previewLink
          })`,
        }}
      />
    );
  }
}

export default BookCover;
