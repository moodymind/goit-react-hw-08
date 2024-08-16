import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";
import { selectContacts } from "./redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <SearchBox />}
      <ContactList />
      <Routes path="/" element={<Layout />}></Routes>
    </div>
  );
}

export default App;
