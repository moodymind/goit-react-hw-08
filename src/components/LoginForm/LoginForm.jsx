import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Not a correct email format").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
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
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};
