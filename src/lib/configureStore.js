import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const addPromiseToDispatch = ({ dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export default function(initialState) {
  const middlewares = [logger, addPromiseToDispatch];

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
