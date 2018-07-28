import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import todoReducer from "./modules/Todo";
import userReducer from "./modules/User";

const entitiesReducer = (state = {}, action) => ({
  ...state,
  todos: todoReducer(state.todos, action),
  users: userReducer(state.users, action)
});

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      entities: entitiesReducer,
      router: routerReducer
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
}
