import React, { Component } from "react";
import { graphql } from "react-apollo";
import { INCREMENT_COMMENT_LIKES } from "../../Comment/mutations";
import { showToastr } from "../../Shared/ToastMessage";
import { COMMENTS_SUBSCRIPTION } from "../subscription";
import { FETCH_COMMENTS_FOR_POST } from "../queries";
import MDSpinner from "react-md-spinner";

const R = require('ramda');

class PostCommentList extends Component {

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: COMMENTS_SUBSCRIPTION,
      variables: {postId: this.props.postId},
      updateQuery: (previous, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return previous;
        }
        const newComment = subscriptionData.data.commentAdded,
          previousComments = previous.comments;

        if (!R.find(R.propEq('id', newComment.id))(previousComments)) {
          return R.merge(previous, { comments: [...previousComments, newComment] });
        } else {
          return previous;
        }
      }
    });
  }

  onCommentLike = (comment) => {
    this.props.mutate({
      variables: { id: comment.id },
      optimisticResponse: {
        __typename: "Mutation",
        comment: {
          id: comment.id,
          content: comment.content,
          likes: comment.likes + 1,
          __typename: "CommentType"
        }
      }
    });
  }

  renderPostComments = (comments) => {
    return R.map(comment => {
      return(
        <li key={comment.id} className="list-group-item">
          {comment.content}

          <span className="pull-right">
            <span className="margin-right-10">{comment.likes}</span>
            <button className="btn btn-xs btn-warning" data-comment-id={comment.id} onClick={() => this.onCommentLike(comment)}>
              <span data-comment-id={comment.id} className="fa fa-thumbs-o-up"></span>
            </button>
          </span>
        </li>
      );
    }, comments);
  }

  render() {
    if(this.props.data.loading) {
      return(
        <div className="text-center">
          <MDSpinner singleColor="#03a9f4" />
        </div>
      );
    }

    const { comments } = this.props.data;

    return(
      <div className="margin-bottom-30">
        <h3>Comments</h3>
        <ul className="list-group">
          {this.renderPostComments(comments)}
        </ul>
      </div>
    );
  }
}

const getOptionForFetchPostComments = (props) => { return { variables: { post_id: props.postId } } };

export default graphql(INCREMENT_COMMENT_LIKES)(
  graphql(FETCH_COMMENTS_FOR_POST, { options: getOptionForFetchPostComments })(PostCommentList)
);
