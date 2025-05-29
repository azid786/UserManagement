import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [localUsers, setLocalUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (user) => {
    setLocalUsers([user, ...localUsers]);
  };

  const filtered = [...localUsers, ...users].filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Management</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <UserForm onAddUser={handleAddUser} />
    </div>
  );
}

export default App;
