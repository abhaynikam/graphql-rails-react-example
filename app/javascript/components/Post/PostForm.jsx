import React from "react";
import { Field } from "react-final-form";
import { FormInput, FormHiddenInput, FormTextArea, FormFileInput } from "../Form";
import { required } from "../Validations";

const PostForm = (props) => {
  const { handleSubmit, invalid, pristine, submitting, authorId, form } = props;

  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="post[title]" labelText="Title" validate={required} />
      <FormTextArea name="post[body]" labelText="Body" validate={required} />
      <FormFileInput name="post[image]" labelText="Cover Image" form={form} />

      <Field name="post[author_id]" component={FormHiddenInput} />

      <button type="submit" disabled={submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};  

export default PostForm;
