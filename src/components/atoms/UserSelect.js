import React from "react";

export default ({ users }) => (
  <select>
    {users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))}
  </select>
);
