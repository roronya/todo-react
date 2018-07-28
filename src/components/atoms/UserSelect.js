import React from "react";

export default ({ selected, users, handleChange }) => (
  <select value={selected} onChange={handleChange}>
    {users.map(user => (
      <option key={user.id} value={user}>
        {user.name}
      </option>
    ))}
  </select>
);
