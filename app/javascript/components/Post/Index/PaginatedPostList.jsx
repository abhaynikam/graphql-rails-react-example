import React, { Component } from "react";
import { graphql } from "react-apollo";
import ReactPaginate from "react-paginate";
import { PAGINATED_POST_LIST } from "../queries";
import { DELETE_POST } from "../mutations";
import { showToastr } from "../../Shared/ToastMessage";
import { NavLink } from "react-router-dom";
import MDSpinner from "react-md-spinner";

const R = require('ramda');

class PaginatedPostList extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.offset !== this.props.offset || nextProps.query !== this.props.query) {
      this.props.data.refetch();
    }
  }

  handleDeletePost = (event) => {
    let postId = event.target.dataset.postId;
    this.props.mutate({
      variables: { id: postId }
    }).then(() => {
      this.props.paginationData.refetch();
    }).then(() => {
      this.props.data.refetch();
    }).then(() => {
      showToastr("success", "Post deleted successfully!");
    });
  }

  handlePageClick = (data) => {
    const selected = data.selected,
      offset = Math.ceil(selected * this.props.limit);

    this.props.handlePageChange(offset, selected);
  };

  renderPosts = posts =>
    R.map(post => {
      return(
        <li key={post.id} className="list-group-item">
          <NavLink
            className="pull-left"
            to={`/posts/${post.id}`}
          >
            {post.title}
          </NavLink>
          <span className="pull-right">
            <button className="btn btn-xs btn-danger" data-post-id={post.id} onClick={this.handleDeletePost}>
              <span data-post-id={post.id} className="fa fa-trash-o"></span>
            </button>
          </span>
        </li>
      );
    }, posts);

  render() {
    const { loading, posts } = this.props.data,
      { paginationData, currentPage, query } = this.props;


    if(loading || paginationData.loading) {
      return(
        <div className="text-center">
          <MDSpinner singleColor="#03a9f4" />
        </div>
      );
    }

    const pageCount = Math.ceil(paginationData.metadata.total_count / this.props.limit);

    return(
      <div>

        <div className="form-group">
          <input
            type="text"
            name="query"
            value={query}
            className="form-control"
            placeholder="Search by post title"
            onChange={(event) => this.props.handlePostFilter(event.target.value) }
          />
        </div>

        <ul className="list-group margin-bottom-30">
          {this.renderPosts(posts)}
        </ul>

        <div className="text-center">
          <ReactPaginate
            previousLabel="prev"
            nextLabel="next"
            forcePage={currentPage}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            containerClassName="pagination"
            activeClassName="active"
            onPageChange={this.handlePageClick}
            disableInitialCallback={true}
          />
        </div>
      </div>
    );
  }
}

const getOptionForFetchPaginatedPostList = (props) => {
  return { variables: { limit: props.limit, offset: props.offset, query: props.query } };
};


export default graphql(DELETE_POST)(
  graphql(PAGINATED_POST_LIST, { options: getOptionForFetchPaginatedPostList})(PaginatedPostList)
);
