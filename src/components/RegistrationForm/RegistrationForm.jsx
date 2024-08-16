import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      register({
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.email.value,
      })
    );

    form.reset();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label>
            Name:
            <Field type="text" name="name" placeholder="Enter your name..." />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <label>
            Email:
            <Field
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <label>
            Password:
            <Field
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};
