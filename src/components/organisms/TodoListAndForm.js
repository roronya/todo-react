import React from "react";
import TodoList from "../molecules/TodoList";
import TodoForm from "../molecules/TodoForm";

export default ({ todos, handleSubmit }) => (
  <div>
    <TodoForm handleSubmit={handleSubmit} />
    <TodoList todos={todos} />
  </div>
);
