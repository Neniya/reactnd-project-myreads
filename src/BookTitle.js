import React, { Component } from "react";

class BookTitle extends Component {
  render() {
    return <div className="book-title">{this.props.title}</div>;
  }
}

export default BookTitle;
