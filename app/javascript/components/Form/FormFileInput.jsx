import React from "react";
import { Field } from "react-final-form";

const FormFileInput = (props) => {
  const { name, validate, labelText } = props;

  const handleChange = (event) => {
    props.form.change(props.name, event.target.files);
  }

  return(
    <Field name={name} validate={validate} type="file">
      {({ input, meta }) => (
        <input {...input} type="file" className="form-control" onChange={handleChange} />
      )}
    </Field>
  );
}

export default FormFileInput;
