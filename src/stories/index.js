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

const todo = new TodoModel({
  progress: TODO.PROGRESS_TODO,
  body: "洗い物"
});

storiesOf("Todo", module).add("洗い物", () => <Todo todo={todo} />);
storiesOf("TodoForm", module).add("default", () => <TodoForm />);
