/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts",
  ...rest
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to={redirectTo} replace />
  ) : (
    <Component {...rest} />
  );
};
