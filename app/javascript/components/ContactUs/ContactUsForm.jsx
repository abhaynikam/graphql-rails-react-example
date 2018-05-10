import React from "react";
import { FormInput, FormTextArea } from "../Form";
import { required } from "../Validations";

const ContactUsForm = (props) => {
  const { handleSubmit, invalid, pristine, submitting, submitError } = props;

  return(
    <form className="bootstrap-center-form-medium" onSubmit={handleSubmit}>
      <h2>Contact us</h2>

      <FormInput name="contact[title]" labelText="Title" validate={required} submitError={submitError} />
      <FormInput name="contact[email]" labelText="Email" submitError={submitError} />

      <FormTextArea name="contact[body]" labelText="Body" submitError={submitError} />

      <button type="submit" disabled={submitting} className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}

export default ContactUsForm;
