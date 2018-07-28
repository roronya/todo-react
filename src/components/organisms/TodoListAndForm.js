import React from "react";
import TodoList from "../molecules/TodoList";
import TodoForm from "../molecules/TodoForm";

export default ({ todos }) => (
  <div>
    <TodoForm />
    <TodoList todos={todos} />
  </div>
);
