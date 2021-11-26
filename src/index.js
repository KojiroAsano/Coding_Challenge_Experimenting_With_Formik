import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "",
      password: "",
      agreement: false,
      logIn: false
    },
    onSubmit: (values) => {
      if (values.logIn) {
        alert("sign in Successful");
      }
    },
    validate: (values) => {
      let validEmail;
      let validPwd;
      let validFirst;
      let validLast;
      let validAgreement;

      let errors = {};

      if (!values.first) {
        errors.first = "First name is required";
        validFirst = false;
      } else {
        validFirst = true;
      }

      if (!values.last) {
        errors.last = "Last name is required";
        validLast = false;
      } else {
        validLast = true;
      }

      if (!values.email) {
        errors.email = "Field required";
        validEmail = false;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
        validEmail = false;
      } else {
        validEmail = true;
      }

      if (!values.password) {
        errors.password = "Password is  required";
        validPwd = false;
      } else if (
        !/^(?=.*[A-Z])(?=.*[.?/-])[a-zA-Z0-9.?/-]{8,24}$/i.test(values.password)
      ) {
        errors.password =
          "Password has to be 8-24 characters and musht include lower and upper case and special characters (., ?, /, -).";
        validPwd = false;
      } else {
        validPwd = true;
      }

      if (values.agreement === false) {
        errors.agreement = "Must read agreement";
        validAgreement = false;
      } else {
        validAgreement = true;
      }

      if (validEmail && validPwd && validFirst && validLast && validAgreement) {
        values.logIn = true;
      } else {
        values.logIn = false;
      }
      //console.log(values.agreement);

      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>First Name: </label>
        <input
          id="firstNameField"
          name="first"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.first}
        />
        <div id="firstError">
          {formik.errors.first ? (
            <div style={{ color: "red" }}>{formik.errors.first}</div>
          ) : null}
        </div>

        <label>Last Name: </label>
        <input
          id="lastField"
          name="last"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last}
        />
        <div id="lastError">
          {formik.errors.last ? (
            <div style={{ color: "red" }}>{formik.errors.last}</div>
          ) : null}
        </div>

        <label>Email: </label>
        <input
          id="emailField"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div id="emailError">
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <label>Password: </label>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div id="pswError">
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <div id="agreementError">
            <label for="agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                onChange={formik.handleChange}
                value={formik.values.agreement}
              />
              I read agreement
            </label>
            {formik.errors.agreement ? (
              <div style={{ color: "red" }}>{formik.errors.agreement}</div>
            ) : null}
          </div>
        </div>

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
//{formik.values.logIn? <div>{"Login Successful"}</div>: null}

ReactDOM.render(<App />, document.getElementById("root"));
