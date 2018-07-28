import React from "react";
import { connect } from "react-redux";
import TodoListAndForm from "../../components/organisms/TodoListAndForm";
import * as todoModule from "../../modules/Todo";
import { denormalize } from "normalizr";
import * as schema from "../../schema";

const mapStateToProps = (state, ownProps) => ({});

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
