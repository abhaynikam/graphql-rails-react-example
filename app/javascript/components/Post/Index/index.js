import React, { Component } from "react";
import { graphql } from "react-apollo";
import Header from "./Header";
import PaginatedPostList from "./PaginatedPostList";
import { PAGINATION_METADATA } from "../queries";

const PER_PAGE = 10;

class PostIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { offset: 0, limit: PER_PAGE, currentPage: 0 };
  }

  handlePageChange = (offset, currentPage) => this.setState({ offset, currentPage });

  render() {
    const { offset, limit, currentPage } = this.state;

    return(
      <div>
        <Header />
        <PaginatedPostList
          offset={offset}
          limit={limit}
          handlePageChange={this.handlePageChange}
          pagination_data={this.props.data}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default graphql(PAGINATION_METADATA)(PostIndex);
