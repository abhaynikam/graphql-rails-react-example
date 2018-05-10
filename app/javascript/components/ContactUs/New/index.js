import React, { Component } from "react";
import { Form } from "react-final-form";
import { graphql } from "react-apollo";
import ContactUsForm from "../ContactUsForm";
import { CREATE_CONTACT } from "../mutations";
import { showToastr, showToastrError } from "../../Shared/ToastMessage";

const R = require("ramda");

class ContactUs extends Component {

  onSubmit = (values) => {
    let errors = {};

    this.props.mutate({
      variables: values
    }).then((response) => {
      if(R.isEmpty(response.data.contact.errors)) {
        this.refs.contactUsForm.form.reset();
        showToastr("success", "Thank you for your message. We will contact you soon!");
      } else {
        // TODO: render server side error messages
      }
    });
  }

  render() {
    return(
      <div>
        <Form
          ref="contactUsForm"
          onSubmit={this.onSubmit.bind(this)}
          render={({ handleSubmit, pristine, invalid, submitting, submitError }) => (
            <ContactUsForm handleSubmit={handleSubmit} pristine={pristine} invalid={invalid} submitError={submitError} />
          )}
        />
      </div>
    );
  }
}

export default graphql(CREATE_CONTACT)(ContactUs);
