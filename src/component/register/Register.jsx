import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import FormikField from "../shared/FormikField";
import { Link } from "react-router-dom";
import Radio from "../shared/Radio";
import * as yup from "yup";

const Register = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    changepassword: "",
    gender: "Female",
    hobby: [],
    active: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));

  const validationSchema = yup.object({
    userName: yup.string().required("username field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    changepassword: yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same"),
    }),
    hobby: yup.array().of(
      yup.object().shape({
        hobby: yup.string().required("Name required"),
      })
    ),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="w-50 m-auto" style={{ padding: 20 }}>
                <FormikField label="userName" name="userName" type="text" />

                <FormikField label="email" name="email" type="email" />
                <FormikField label="password" name="password" type="password" />
                <FormikField
                  label="Confim password"
                  name="changepassword"
                  type="password"
                />

                <Field name="active">
                  {(formikField) => {
                    return (
                      <>
                        <label
                          className="text-start my-3"
                          htmlFor="active"
                          style={{ display: "block" }}
                        >
                          Active
                        </label>
                        <input
                          className="float-start"
                          type="checkbox"
                          {...formikField.field}
                        />
                        <ErrorMessage name="active">
                          {(errMessage) => {
                            return (
                              <div style={{ color: "red" }}>{errMessage}</div>
                            );
                          }}
                        </ErrorMessage>
                      </>
                    );
                  }}
                </Field>

                <Field name="gender">
                  {(formikField) => {
                    return (
                      <>
                        <Radio
                          label="Gender"
                          option2="Female"
                          option1="Male"
                          name="gender"
                          type="radio"
                        />
                      </>
                    );
                  }}
                </Field>
                <FieldArray
                  name="hobby"
                  render={(arrayHelpers) => {
                    const hobby = formik.values.hobby;
                    return (
                      <div>
                        {hobby && hobby.length > 0
                          ? hobby.map((hobby, index) => (
                              <div
                                key={index}
                                className="d-flex border p-3 my-2 justify-content-around align-items-center"
                              >
                                <div>
                                  <Field
                                    className="form-control mt-3"
                                    placeholder="Enter Hobby"
                                    name={`hobby.${index}.hobby`}
                                  />
                                </div>

                                <ErrorMessage name={`hobby.${index}.hobby`}>
                                  {(errMessage) => {
                                    return (
                                      <div style={{ color: "red" }}>
                                        {errMessage}
                                      </div>
                                    );
                                  }}
                                </ErrorMessage>
                                <br />
                                <button
                                  className="btn btn-danger my-4"
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Delete
                                </button>
                              </div>
                            ))
                          : null}
                        <div>
                          <button
                            className="btn btn-primary my-3"
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({
                                hobby: "",
                              })
                            }
                          >
                            Add a Hobby
                          </button>
                        </div>
                      </div>
                    );
                  }}
                />

                <button
                  className="btn btn-primary m-auto"
                  type="submit"
                  style={{ display: "block" }}
                >
                  submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <div>
        have account ?
        <Link className="text-decoration-none" to="/login">
          Login
        </Link>
      </div>
    </>
  );
};
export default Register;
