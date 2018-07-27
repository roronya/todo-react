import React from "react";

export default ({ todo }) => (
  <ul>
    <li>{todo.id}</li>
    <ul>
      <li>{todo.progress}</li>
      <li>{todo.body}</li>
    </ul>
  </ul>
);
