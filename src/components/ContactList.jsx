import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  if (!contacts.length) return <div>No contacts found.</div>;
  return (
    <div>
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  );
}
