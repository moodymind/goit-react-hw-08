import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.userMenuText}>Welcome, {user.name}</p>
      <button
        className={styles.userMenuButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
