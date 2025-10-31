import React from "react";

export default function ContactCard({ contact }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 6,
      padding: 12,
      marginBottom: 10
    }}>
      <strong>{contact.name}</strong><br />
      <span>{contact.email}</span><br />
      <span>{contact.phone}</span>
    </div>
  );
}
