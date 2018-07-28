import axios from "axios";
import { normalize } from "normalizr";
import * as schema from "../schema";

const ADD_TODO = "ADD_TODO";
const START_REQUEST = "START_REQUEST";
const RECEIVE_DATA = "RECEIVE_DATA";
const FINISH_REQUEST = "FINISH_REQUEST";

export const startRequest = todos => ({
  type: START_REQUEST,
  payload: { todos }
});

export const receiveData = (todos, error, response) => ({
  type: RECEIVE_DATA,
  payload: { todos, error, response }
});
export const finishRequest = todos => ({
  type: FINISH_REQUEST,
  payload: { todos }
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { todo }
});

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const todos = getState().todo.todos;
    dispatch(startRequest(todos));
    axios
      .get("http://localhost:3000/todos")
      .then(response => {
        dispatch(receiveData(todos, null, response.data));
      })
      .catch(error => {
        dispatch(receiveData(todos, error));
      })
      .finally(() => {
        dispatch(finishRequest(todos));
      });
  };
};

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return normalize(action.payload.response, [schema.todo]);
    case ADD_TODO:
      const todo = action.payload.todo.set("id", state.todos.length);
      return { todos: [...state.todos, todo] };
    default:
      return state;
  }
};
