import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions';
import { setToken, clearToken } from '../lib';
import { LOGOUT } from './types';
import { createAction } from 'redux-api-middleware';

export const login = ({ username, password }) =>
  createAction({
    endpoint: '/api/authenticate',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    }),
    types: [
      LOGIN_REQUEST,
      {
        type: LOGIN_SUCCESS,
        payload(action, state, res) {
          const token = res.headers.get('Authorization');
          setToken(token);
          return { token };
        }
      },
      LOGIN_FAILURE
    ]
  });

export function logout() {
  clearToken();
  return {
    type: LOGOUT
  };
}

export const register = ({ username, password }) =>
  createAction({
    endpoint: '/api/register',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    types: [
      REGISTER_REQUEST,
      {
        type: REGISTER_SUCCESS,
        payload(action, state, res) {
          const token = res.headers.get('Authorization');
          setToken(token);
          return { token };
        }
      },
      REGISTER_FAILURE
    ]
  });
