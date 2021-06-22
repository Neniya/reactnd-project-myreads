import React, { Component } from "react";
import BookShelf from "./BookShelf";

class BookShelfs extends Component {
  render() {
    const shelfs = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
    };
    return (
      <div>
        {Object.keys(shelfs).map((shelfKey) => (
          <BookShelf
            key={shelfKey}
            shelfs={shelfs}
            shelfKey={shelfKey}
            books={this.props.books}
            updateBookShelf={this.props.updateBookShelf}
          />
        ))}
      </div>
    );
  }
}

export default BookShelfs;
