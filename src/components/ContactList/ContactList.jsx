import React from "react";
import { Contact } from "../Contact /Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilterContacts } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFilterContacts);

  console.log("Contacts:", contacts);
  console.log("Filter:", contactsFilter);

  const filteredContacts = contacts
    ? contacts.filter((contact) => contact.name.includes(contactsFilter))
    : [];

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
