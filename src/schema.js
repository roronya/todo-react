import { schema } from "normalizr";

export const user = new schema.Entity("users");

export const todo = new schema.Entity("todos", {
  assignee: user
});
