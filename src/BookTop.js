import React, { Component } from "react";

class BookTop extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks.smallThumbnail,
          }}
        />
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

export default BookTop;
