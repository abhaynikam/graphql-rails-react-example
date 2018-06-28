import React, { Component } from "react";
import { graphql } from "react-apollo";
import { FETCH_POST } from "../queries";
import MDSpinner from "react-md-spinner";
import { NavLink } from "react-router-dom";
import NewComment from "../../Comment/New";
import PostCommentList from "./PostCommentList";
import { COMMENTS_SUBSCRIPTION } from "../subscription";

const R = require('ramda');

class PostDetails extends Component {

  render() {
    if(this.props.data.loading) {
      return(
        <div className="text-center">
          <MDSpinner singleColor="#03a9f4" />
        </div>
      );
    }

    const { title, body, id, comments, author, created_at } = this.props.data.post;

    return(
      <div className="container">
        <h1 className="text-center post-title margin-bottom-30">{title}</h1>

        <div className="post-meta">
          <em>{created_at}</em>
          {` - ${author.full_name}`}
        </div>

        <div className="post-content">
          <p>{body}</p>
        </div>

        <PostCommentList postId={id} />

        <NewComment postId={id} currentUserId={this.props.currentUserId} history={this.props.history} data={this.props.data}/>
      </div>
    );
  }
}

const getOptionForFetchPost = (props) => { return { variables: { id: props.match.params.id } } };

export default graphql(
  FETCH_POST, { options: getOptionForFetchPost}
)(PostDetails);
