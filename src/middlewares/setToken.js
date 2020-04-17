import { getToken } from '../lib';
import { RSAA } from 'redux-api-middleware';

export default (store) => (next) => (action) => {
  try {
    let headers = action[RSAA]['headers'];
    if (typeof headers === 'undefined') {
      next(action);
    } else {
      action[RSAA]['headers'] = {
        ...headers,
        Authorization: getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      next(action);
    }
  } catch (e) {
    next(action);
  }
};
