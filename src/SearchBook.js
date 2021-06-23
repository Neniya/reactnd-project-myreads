import React, { Component } from "react";
import BooksGrid from "./Booksgrid";
import * as BooksAPI from "./BooksAPI";

import SearchBookBar from "./SearchBooksBar";

class SearchBook extends Component {
  state = {
    showingBooks: [],
  };

  searchBooks = async (query) => {
    let showingBooks = await BooksAPI.search(query);
    if ((showingBooks && "error" in showingBooks) || !showingBooks) {
      showingBooks = [];
    }
    this.setState({ showingBooks });
  };

  whichShelf = (book) => {
    let shelf = "none";
    const bookOnShelf = this.props.books.find((b) => b.id === book.id);

    if (bookOnShelf) {
      shelf = bookOnShelf.shelf;
    }
    return shelf;
  };

  render() {
    return (
      <div className="search-books">
        <SearchBookBar searchBooks={this.searchBooks} />
        <div className="search-books-results">
          <BooksGrid
            books={this.state.showingBooks}
            isShelf={false}
            updateBookShelf={this.props.updateBookShelf}
            whichShelf={this.whichShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchBook;
