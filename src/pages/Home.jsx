import React, { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import AddContactForm from "../components/AddContactForm";
import { getContacts } from "../services/api";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load contacts (and from localStorage if any)
  useEffect(() => {
    (async () => {
      try {
        const stored = localStorage.getItem("contacts");
        if (stored) {
          setContacts(JSON.parse(stored));
        } else {
          const data = await getContacts();
          setContacts(data);
          localStorage.setItem("contacts", JSON.stringify(data));
        }
      } catch (e) {
        setError("Failed to load contacts.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // When user adds new contact
  const handleAdd = (newContact) => {
    const updated = [...contacts, newContact];
    setContacts(updated);
    localStorage.setItem("contacts", JSON.stringify(updated));
  };

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <AddContactForm onAdd={handleAdd} />
      <SearchBar value={query} onChange={setQuery} />
      <ContactList contacts={filtered} />
    </div>
  );
}
