import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
