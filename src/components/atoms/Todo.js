import React from "react";

export default ({ todo }) => (
  <ul>
    <li>{todo.progress}</li>
    <li>{todo.body}</li>
  </ul>
);
