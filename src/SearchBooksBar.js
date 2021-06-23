import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBookInputWrapper from "./SearchBookInput";
import PropTypes from "prop-types";

class SearchBookBar extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <SearchBookInputWrapper searchBooks={this.props.searchBooks} />
      </div>
    );
  }
}

export default SearchBookBar;
