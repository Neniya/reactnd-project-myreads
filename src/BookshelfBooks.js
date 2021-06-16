import React, { Component } from "react";

class BookshelfBooks extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books
            .filter((book) => book.shelf === this.props.shelf)
            .map((book) => (
              <li key={book.id}>
                <div className="book">
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
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">To Kill a Mockingbird</div>
                  <div className="book-authors">Harper Lee</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
export default BookshelfBooks;
