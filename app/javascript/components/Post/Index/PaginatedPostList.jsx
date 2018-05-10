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
    if(nextProps.offset !== this.props.offset) {
      this.props.data.refetch();
    }
  }

  handleDeletePost = (event) => {
    let postId = event.target.dataset.postId;
    this.props.mutate({
      variables: { id: postId }
    }).then(() => {
      this.props.pagination_data.refetch();
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
      pagination_data = this.props.pagination_data,
      currentPage = this.props.currentPage;


    if(loading || pagination_data.loading) {
      return(
        <div className="text-center">
          <MDSpinner singleColor="#03a9f4" />
        </div>
      );
    }

    const pageCount = Math.ceil(pagination_data.metadata.total_count / this.props.limit);

    return(
      <div>
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
  return { variables: { limit: props.limit, offset: props.offset } };
};


export default graphql(DELETE_POST)(
  graphql(PAGINATED_POST_LIST, { options: getOptionForFetchPaginatedPostList})(PaginatedPostList)
);
