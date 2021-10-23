import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ padding: 20 }} className="w-50 m-auto">
          <label
            className="text-start  my-3"
            htmlFor="email"
            style={{ display: "block" }}
          >
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-start my-2" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          )}
          <label
            className="text-start my-3"
            htmlFor="password"
            style={{ display: "block" }}
          >
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-start my-2" style={{ color: "red" }}>
              {formik.errors.password}
            </div>
          )}
          <label
            className="text-start my-3"
            htmlFor="rememberMe"
            style={{ display: "block" }}
          >
            Remember me
          </label>
          <input
            className="float-start"
            type="checkbox"
            id="rememberMe"
            onChange={formik.handleChange}
            defaultChecked={formik.values.rememberMe}
          />
          <button
            className="btn btn-primary my-5"
            type="submit"
            style={{ display: "block" }}
          >
            submit
          </button>
        </div>
      </form>
      <div>
        Do not have account ?
        <Link className="text-decoration-none" to="/register">
          Register
        </Link>
      </div>
    </>
  );
};
export default LoginForm;
