import React from "react";
import { connect } from "react-redux";
import TodoListAndForm from "../../components/organisms/TodoListAndForm";
import * as modules from "../../modules/TodoListAndForm";

const mapStateToProps = (state, ownProps) => ({
  todos: state.TodoListAndForm.todos
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(todo) {
    dispatch(modules.submitTodo(todo));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListAndForm);
