import { schema } from "normalizr";

export const user = new schema.Entity("user");
export const todo = new schema.Entity("todo", {
  assignee: user
});
