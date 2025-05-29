import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => (
  <div className="user-card">
    <strong>{user.name}</strong>
    <div>{user.email}</div>
    <div>{user.phone}</div>
  </div>
);

export default UserCard;
