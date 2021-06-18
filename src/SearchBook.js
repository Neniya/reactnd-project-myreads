import React, { Component } from "react";
import BooksGrid from "./Booksgrid";

import SearchBookBar from "./SearchBooksBar";

class SearchBook extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBookBar />
        <div className="search-books-results">
          <BooksGrid books={this.props.books} isShelf={false} />
        </div>
      </div>
    );
  }
}

export default SearchBook;
