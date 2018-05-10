import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MDSpinner from "react-md-spinner";
import PostForm from "../PostForm";
import { Form } from "react-final-form";
import { FETCH_POSTS } from "../queries";
import { CREATE_POST } from "../mutations";
import { showToastr } from "../../Shared/ToastMessage";
import { NavLink } from "react-router-dom";

const R = require('ramda');

class NewPost extends Component {

  onSubmit = (values) => {
    this.props.mutate({
      variables: values,
      refetchQueries: [{ query: FETCH_POSTS }]
    }).then(() => {
      showToastr('success', "Post created successfully!");
    }).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    const initialValues = {
      post: {
        author_id: this.props.authorId
      }
    }

    return(
      <div>
        <div className="page-header">
          <div className="page-header-left">
            <NavLink to="/">Back</NavLink>
          </div>
          <h3 className="margin-left-10">Add New Post</h3>
        </div>

        <Form
          onSubmit={this.onSubmit.bind(this)}
          initialValues={initialValues}
          render={({ handleSubmit, pristine, invalid, submitting }) => (
            <PostForm handleSubmit={handleSubmit} pristine={pristine} invalid={invalid} authorId={this.props.authorId} />
          )}
        />
      </div>
    );
  }
}

export default graphql(CREATE_POST)(NewPost);
