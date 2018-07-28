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
    <TodoInput value={values.body} handleChange={handleChange("body")} />
    <UserSelect
      selected={values.assigneeId}
      users={props.users.map(user => user.toJS())}
      handleChange={handleChange("assigneeId")}
    />
    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({
    body: "",
    assigneeId: 0
  }),
  handleSubmit: (values, { props }) => {
    const user = props.users[values.assigneeId];
    const todo = new Todo({
      body: values.body,
      assignee: user
    });
    props.handleSubmit(todo);
  }
})(TodoForm);
