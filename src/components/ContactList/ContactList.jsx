import React from "react";
import { Contact } from "../Contact /Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <li>No contacts found</li>
      )}
    </ul>
  );
};
