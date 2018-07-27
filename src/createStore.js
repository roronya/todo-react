import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // add reducer
      router: routerReducer
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
}
