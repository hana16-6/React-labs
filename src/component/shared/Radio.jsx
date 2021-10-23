import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

const Radio = ({ name, type, label, option1, option2 }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label className="m-2" htmlFor={name}>
              {label}
            </label>
            <label className="m-2">{option1}</label>
            <Field type={type} name={name} value={option1}></Field>

            <label className="m-2">{option2}</label>
            <Field type={type} name={name} value={option2}></Field>
            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default Radio;
