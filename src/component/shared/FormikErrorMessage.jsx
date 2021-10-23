import React from "react";
import { ErrorMessage } from "formik";

/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return (
          <div className="my-2 text-start" style={{ color: "red" }}>
            {errMessage}
          </div>
        );
      }}
    </ErrorMessage>
  );
};

export default FormikErrorMessage;
