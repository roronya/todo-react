import Immutable from "immutable";
import User from "../models/User";

export const PROGRESS_TODO = "TODO";
export const PROGRESS_DOING = "DOING";
export const PROGRESS_DONE = "DONE";

const initialParams = {
  id: undefined,
  progress: PROGRESS_TODO,
  body: "",
  assignee: undefined
};

const TodoRecord = Immutable.Record(initialParams);

export default class Todo extends TodoRecord {}
