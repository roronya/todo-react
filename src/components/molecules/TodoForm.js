import React from "react";
import TodoInput from "../atoms/TodoInput";
import SubmitButton from "../atoms/SubmitButton";
import UserSelect from "../atoms/UserSelect";
import { withFormik } from "formik";
import Todo from "../../models/Todo";

const TodoForm = ({
  values,
  handleChange,
  setFieldValue,
  handleSubmit,
  ...props
}) => (
  <form>
    <TodoInput
      value={values.todo.body}
      handleChange={handleChange("todo.body")}
    />
    <UserSelect
      selected={values.todo.assignee}
      users={values.users}
      handleChange={handleChange("todo.assignee")}
    />
    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({
    todo: new Todo().set("assignee", props.users[0]).toJS(),
    users: props.users,
    handleSubmit: props.handleSubmit
  }),
  handleSubmit: values => {
    const todo = new Todo({
      body: values.todo.body,
      assignee: values.todo.assignee
    });
    values.handleSubmit(todo);
  }
})(TodoForm);
