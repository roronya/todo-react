import React from "react";
import Todo from "../../components/atoms/Todo";

export default ({ todos }) => (
  <ul><li>{todos.map(todo => <Todo todo={todo} />)}</li></ul>
);
