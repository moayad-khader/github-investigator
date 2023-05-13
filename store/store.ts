import { createStore } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
import asyncDispatchMiddleware from "./middleware";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ?  applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        asyncDispatchMiddleware
      )
    : applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        asyncDispatchMiddleware
      )
);

export default store;
