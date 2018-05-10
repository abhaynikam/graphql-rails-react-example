import React from "react";
import { Field } from "react-final-form";
import { FormHiddenInput, FormTextArea } from "../Form";
import { required } from "../Validations";

const CommentForm = (props) => {

  const { handleSubmit, invalid, pristine, submitting } = props;

  return(
    <form onSubmit={handleSubmit}>
      <FormTextArea name="comment[content]" labelText="Comment" validate={required} />

      <Field name="comment[post_id]" component={FormHiddenInput} />
      <Field name="comment[user_id]" component={FormHiddenInput} />

      <button type="submit" disabled={submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
