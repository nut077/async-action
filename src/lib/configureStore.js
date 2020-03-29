import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { apiMiddleware } from "redux-api-middleware";
import { setToken } from "../middlewares";

export default function(initialState) {
  const middlewares = [setToken, apiMiddleware, thunk, logger];

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
