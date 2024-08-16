import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};
