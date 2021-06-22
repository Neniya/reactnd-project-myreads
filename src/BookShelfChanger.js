import React, { Component } from "react";

class BookShelfChanger extends Component {
  updateBookShelf = (shelf) => {
    this.props.updateBookShelf(this.props.book, shelf);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={
            this.props.book.shelf
              ? this.props.book.shelf
              : this.props.whichShelf(this.props.book)
          }
          onChange={(event) => this.updateBookShelf(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
