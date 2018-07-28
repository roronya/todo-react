import React from "react";
import TodoList from "../molecules/TodoList";
import TodoForm from "../molecules/TodoForm";

export default class TodoListAndForm extends React.Component {
  componentWillMount() {
    this.props.onMount();
  }

  render() {
    return <p>hoge</p>;
//    const { todos, users, handleSubmit } = this.props;
//    return (
//      <div>
//        <TodoForm users={users} handleSubmit={handleSubmit} />
//        <TodoList todos={todos} />
//      </div>
//    );
  }
}
