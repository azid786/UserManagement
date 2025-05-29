import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    onAddUser({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="form-wrapper">
      <h2>Add User</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </form>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};

export default UserForm;
