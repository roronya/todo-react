import React from "react";

export default ({ users, handleChange }) => (
  <select onChange={handleChange}>
    {users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))}
  </select>
);
