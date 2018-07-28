import React from "react";
import { connect } from "react-redux";
import TodoListAndForm from "../../components/organisms/TodoListAndForm";
import * as todoModule from "../../modules/Todo";
import { denormalize } from "normalizr";
import * as schema from "../../schema";
import Todo from "../../models/Todo";
import User from "../../models/User";

const mapStateToProps = (state, ownProps) => {
  const todos = denormalize(
    Object.keys(state.entities.todos),
    [schema.todo],
    state.entities
  ).map(todo => new Todo({ ...todo }));
  const users = denormalize(
    Object.keys(state.entities.users),
    [schema.user],
    state.entities
  ).map(user => new User({ ...user }));
  return {
    todos: todos,
    users: users
  };
};

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
