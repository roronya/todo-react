import axios from "axios";
import { normalize } from "normalizr";
import * as schema from "../schema";
import * as actionType from "../actionType";

const ADD_TODO = "ADD_TODO";

export const startRequest = todos => ({
  type: actionType.START_REQUEST,
  payload: { todos }
});

export const receiveData = (todos, error, response) => ({
  type: actionType.RECEIVE_DATA,
  payload: { todos, error, response }
});
export const finishRequest = todos => ({
  type: actionType.FINISH_REQUEST,
  payload: { todos }
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { todo }
});

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const todos = getState().todos;
    dispatch(startRequest(todos));
    axios
      .get("http://localhost:3000/todos")
      .then(response => {
        dispatch(
          receiveData(todos, null, normalize(response.data, [schema.todo]))
        );
      })
      .catch(error => {
        dispatch(receiveData(todos, error));
      })
      .finally(() => {
        dispatch(finishRequest(todos));
      });
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = action.payload.todo.set("id", Object.keys(state).length);
      const normalized = normalize(todo.toJS(), schema.todo).entities.todos;
      return { ...state, ...normalized};
    default:
      return state;
  }
};
