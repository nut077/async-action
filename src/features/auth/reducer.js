import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../../types';
import { getToken } from '../../lib';

const initialState = {
  token: getToken(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      return { token: action.payload.token };
    }
    case LOGOUT:
      return { token: null };
    default:
      return state;
  }
};
