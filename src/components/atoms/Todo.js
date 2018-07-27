import React from "react";

export default ({ todo, ...props }) => (
  <ul>
    <li>{todo.progress}</li>
    <li>{todo.body}</li>
  </ul>
);
