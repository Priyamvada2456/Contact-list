import React, { useState } from "react";

export default function AddContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in all fields!");
      return;
    }

    const newContact = {
      id: Date.now(), // unique ID
      name,
      email,
      phone,
    };

    onAdd(newContact);

    // clear input boxes
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      border: "1px solid #ccc",
      borderRadius: 6,
      padding: 12,
      marginBottom: 20
    }}>
      <h3>Add New Contact</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, marginBottom: 8, width: "100%" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, marginBottom: 8, width: "100%" }}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: 8, marginBottom: 8, width: "100%" }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        Add Contact
      </button>
    </form>
  );
}
