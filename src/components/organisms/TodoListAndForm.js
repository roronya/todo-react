import React from "react";
import TodoList from "../molecules/TodoList";
import TodoForm from "../molecules/TodoForm";

export default ({ todos, users, handleSubmit }) => (
  <div>
    <TodoForm users={users} handleSubmit={handleSubmit} />
    <TodoList todos={todos} />
  </div>
);
