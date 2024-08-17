import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBoxContainer}>
      <label className={styles.searchBoxLabel}>
        Find contacts by name
        <input
          type="text"
          className={styles.searchBoxInput}
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};
