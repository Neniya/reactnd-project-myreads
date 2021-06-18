import React, { Component } from "react";
import BooksGrid from "./Booksgrid";
import * as BooksAPI from "./BooksAPI";

import SearchBookBar from "./SearchBooksBar";

class SearchBook extends Component {
  state = {
    showingBooks: this.props.books,
  };

  searchBooks = (query) => {
    BooksAPI.search(query).then((showingBooks) => {
      console.log(showingBooks);
      this.setState({ showingBooks });
    });
  };
  render() {
    return (
      <div className="search-books">
        <SearchBookBar searchBooks={this.searchBooks} />
        <div className="search-books-results">
          <BooksGrid books={this.state.showingBooks} isShelf={false} />
        </div>
      </div>
    );
  }
}

export default SearchBook;
