/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
  ...rest
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};
