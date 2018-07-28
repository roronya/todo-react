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

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // add reducer
      router: routerReducer,
      todo: todoReducer,
      user: userReducer
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
}
