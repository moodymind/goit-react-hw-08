import React from "react";

export const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};
