import React from "react";
import { connect } from "react-redux";
import TodoListAndForm from "../../components/organisms/TodoListAndForm";
import * as todoModule from "../../modules/Todo";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todo.todos,
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(todo) {
    dispatch(todoModule.addTodo(todo));
  },
  onMount() {
    dispatch(todoModule.fetchTodos());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListAndForm);
