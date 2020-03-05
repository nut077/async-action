import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function(initialState) {
  const middlewares = [logger, thunk];

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
