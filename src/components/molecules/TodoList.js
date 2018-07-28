import React from "react";
import Todo from "../../components/atoms/Todo";

export default ({ todos }) => (
  <div>{todos.map(todo => <Todo todo={todo} />)}</div>
);
