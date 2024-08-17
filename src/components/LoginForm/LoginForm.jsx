import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Not a correct email format").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <label className={styles.label}>
          Email:
          <Field
            type="email"
            name="email"
            placeholder="Enter your email..."
            className={styles.field}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Password:
          <Field
            type="password"
            name="password"
            placeholder="Enter your password..."
            className={styles.field}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </Form>
    </Formik>
  );
};
