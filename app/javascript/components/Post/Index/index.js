import React, { Component } from "react";
import { graphql } from "react-apollo";
import Header from "./Header";
import PaginatedPostList from "./PaginatedPostList";
import { PAGINATION_METADATA } from "../queries";

const PER_PAGE = 10;

class PostIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { offset: 0, limit: PER_PAGE, currentPage: 0, query: "" };
  }

  handlePageChange = (offset, currentPage) => this.setState({ offset, currentPage });

  handlePostFilter = (query) => this.setState({ query });

  render() {
    const { offset, limit, currentPage, query } = this.state;

    return(
      <div>
        <Header />
        <PaginatedPostList
          offset={offset}
          limit={limit}
          handlePageChange={this.handlePageChange}
          handlePostFilter={this.handlePostFilter}
          paginationData={this.props.data}
          currentPage={currentPage}
          query={query}
        />
      </div>
    );
  }
}

export default graphql(PAGINATION_METADATA)(PostIndex);
