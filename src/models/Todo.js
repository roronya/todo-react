import Immutable from "immutable";

export const PROGRESS_TODO = "TODO";
export const PROGRESS_DOING = "DOING";
export const PROGRESS_DONE = "DONE";

const TodoRecord = Immutable.Record({
  progress: PROGRESS_TODO,
  body: ""
});

export default class Todo extends TodoRecord {}