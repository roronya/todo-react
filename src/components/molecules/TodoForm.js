import React from "react";
import TodoInput from "../atoms/TodoInput";
import SubmitButton from "../atoms/SubmitButton";
import UserSelect from "../atoms/UserSelect";
import { withFormik } from "formik";
import Todo from "../../models/Todo";

const TodoForm = ({ values, handleChange, handleSubmit }) => (
  <form>
    <TodoInput
      value={values.todo.body}
      handleChange={handleChange("todo.body")}
    />
    <UserSelect
      users={values.users}
      handleChange={handleChange("todo.assignee")}
    />
    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({
    todo: new Todo().toJS(),
    users: props.users,
    handleSubmit: props.handleSubmit
  }),
  handleSubmit: values => {
    const todo = new Todo({ body: values.todo.body });
    values.handleSubmit(todo);
  }
})(TodoForm);
