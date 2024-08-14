import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";
import { selectContacts } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

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
    </div>
  );
}

export default App;
