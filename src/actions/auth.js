import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../actions';
import axios from 'axios';
import { setToken, clearToken } from '../lib';
import { LOGOUT } from './types';

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess(token) {
  setToken(token);
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

export const login = ({ username, password }) => dispatch => {
  dispatch(requestLogin);
  axios
    .post('/api/authenticate', {
      username,
      password
    })
    .then(({ headers }) => dispatch(loginSuccess(headers['authorization'])))
    .catch(() => alert('รหัสผ่านไม่ถูกต้อง'));
};

export function logout() {
  clearToken();
  return {
    type: LOGOUT
  };
}

function requestRegister() {
  return {
    type: REGISTER_REQUEST
  };
}

function registerSuccess(token) {
  setToken(token);
  return {
    type: REGISTER_SUCCESS,
    token
  };
}

export const register = ({ username, password }) => dispatch => {
  dispatch(requestRegister);
  axios
    .post('/api/register', {
      username,
      password
    })
    .then(({ headers }) => dispatch(registerSuccess(headers['authorization'])));
};
