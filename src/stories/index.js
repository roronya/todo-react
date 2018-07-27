import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

import TodoModel from "../models/Todo";
import * as TODO from "../models/Todo";
import Todo from "../components/atoms/Todo";
import TodoForm from "../components/molecules/TodoForm";
import TodoList from "../components/molecules/TodoList";

const todo = new TodoModel({
  id: 0,
  progress: TODO.PROGRESS_TODO,
  body: "洗い物"
});

const todo0 = todo;
const todo1 = new TodoModel({
  id: 1,
  progress: TODO.PROGRESS_DOING,
  body: "プログラミング"
});
const todo2 = new TodoModel({
  id: 2,
  progress: TODO.PROGRESS_DONE,
  body: "ミーテイング"
});

storiesOf("Todo", module).add("洗い物", () => <Todo todo={todo} />);
storiesOf("TodoForm", module).add("default", () => <TodoForm />);
storiesOf("TodoList", module).add("default", () => (
  <TodoList todos={[todo0, todo1, todo2]} />
));
