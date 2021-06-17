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
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <SearchBook books={this.state.books} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ListBooks books={this.state.books} />
              <OpenSearch />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
