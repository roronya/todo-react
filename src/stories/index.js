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
import UserModel from "../models/User";
import * as TODO from "../models/Todo";
import Todo from "../components/atoms/Todo";
import TodoForm from "../components/molecules/TodoForm";
import TodoList from "../components/molecules/TodoList";
import TodoListAndForm from "../components/organisms/TodoListAndForm";
import UserSelect from "../components/atoms/UserSelect";

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
const todos = [todo0, todo1, todo2];

const user0 = new UserModel({
  id: 0,
  name: "hoshimiya"
});
const user1 = new UserModel({
  id: 1,
  name: "kiriya"
});
const user2 = new UserModel({
  id: 2,
  name: "shibuki"
});
const users = [user0, user1, user2];

storiesOf("Todo", module).add("洗い物", () => <Todo todo={todo} />);
storiesOf("TodoForm", module).add("default", () => <TodoForm />);
storiesOf("TodoList", module).add("default", () => <TodoList todos={todos} />);
storiesOf("TodoListAndForm", module).add("defult", () => (
  <TodoListAndForm todos={todos} />
));
storiesOf("UserSelect", module).add("default", () => (
  <UserSelect users={users} />
));
