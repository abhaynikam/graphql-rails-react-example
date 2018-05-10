import React, { Component } from "react";
import { Form } from "react-final-form";
import { graphql } from "react-apollo";
import CommentForm from "../CommentForm";
import { CREATE_COMMENT } from "../mutations";
import { fetchPost } from "../../Post/queries";
import { showToastr } from "../../Shared/ToastMessage";

class NewComment extends Component {

  onSubmit = (values) => {
    this.props.mutate({
      variables: values
    }).then(() => {
      showToastr("success", "Comment created successfully!");
    });
  }

  render() {
    const initialValues = {
      comment: {
        post_id: this.props.postId,
        user_id: this.props.currentUserId
      }
    }

    return(
      <div>
        <h3>Add Comment</h3>

        <Form
          onSubmit={this.onSubmit.bind(this)}
          initialValues={initialValues}
          render={({ handleSubmit, pristine, invalid, submitting }) => (
            <CommentForm handleSubmit={handleSubmit} pristine={pristine} invalid={invalid} />
          )}
        />

      </div>
    );
  }
}

export default graphql(CREATE_COMMENT)(NewComment);
