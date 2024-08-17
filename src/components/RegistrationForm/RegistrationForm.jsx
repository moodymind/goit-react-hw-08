import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  email: Yup.string().email("Not a correct email format").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <div className={styles.formField}>
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
