import React, { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { Layout } from "../Layout";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import styles from "./App.module.css";
import { Audio } from "react-loader-spinner";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // console.log("isRefreshing:", isRefreshing);

  // if (isRefreshing) {
  //   return (
  //     <div className={styles.loaderContainer}>
  //       <Audio
  //         height="80"
  //         width="80"
  //         radius="9"
  //         color="green"
  //         ariaLabel="loading"
  //         wrapperStyle
  //         wrapperClass
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className={styles.appContainer}>
      <Layout>
        <main className={styles.appMain}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={RegistrationPage} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={LoginPage} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={ContactsPage} />}
            />
          </Routes>
        </main>
      </Layout>
    </div>
  );
}

export default App;
