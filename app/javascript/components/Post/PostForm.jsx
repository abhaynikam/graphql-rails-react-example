import React from "react";
import { Field } from "react-final-form";
import { FormInput, FormHiddenInput, FormTextArea } from "../Form";
import { required } from "../Validations";

const PostForm = (props) => {
  const { handleSubmit, invalid, pristine, submitting, authorId } = props;

  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="post[title]" labelText="Title" validate={required} />
      <FormTextArea name="post[body]" labelText="Body" validate={required} />

      <Field name="post[author_id]" component={FormHiddenInput} />

      <button type="submit" disabled={submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
