import React from "react";
import { Field } from "react-final-form";

const FormInput = (props) => {
  const { name, validate, labelText } = props;

  return(
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className="form-group">
          <label className="field-label">{labelText}</label>
          <input {...input} type="text" className="form-control" />
          {(meta.error || meta.submitError) && meta.touched && <span className="help-block">{meta.error || meta.submitError}</span>}
        </div>
      )}
    </Field>
  );
}

export default FormInput;
