import React from "react";
import TodoInput from "../atoms/TodoInput";
import SubmitButton from "../atoms/SubmitButton";
import { withFormik } from "formik";
import Todo from "../../models/Todo";

const TodoForm = ({ values, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <TodoInput
      value={values.todo.body}
      handleChange={handleChange("todo.body")}
    />
    <SubmitButton>Submit</SubmitButton>
  </form>
);

export default withFormik({
  mapPropsToValues: props => ({
    todo: new Todo().toJS()
  }),
  handleSubmit: values => {
    // TODO: action
    console.log(values);
  }
})(TodoForm);
