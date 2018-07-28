import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import TodoListAndFormReducer from "./modules/TodoListAndForm";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // add reducer
      router: routerReducer,
      TodoListAndForm: TodoListAndFormReducer
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
}
