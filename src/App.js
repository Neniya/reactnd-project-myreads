import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import { Route } from "react-router-dom";
import OpenSearch from "./OpenSearchButton";

import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  async getAllBooks() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    this.getAllBooks();
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBook
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ListBooks
                books={this.state.books}
                updateBookShelf={this.updateBookShelf}
              />
              <OpenSearch />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
