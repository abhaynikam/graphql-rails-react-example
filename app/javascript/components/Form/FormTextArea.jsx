import React from "react";
import { Field } from "react-final-form";

const FormTextArea = (props) => {
  const { name, validate, labelText } = props;

  return(
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className="form-group">
          <label className="field-label">{labelText}</label>
          <textarea {...input} className="form-control" />
          {meta.error && meta.touched && <span className="help-block">{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default FormTextArea;
