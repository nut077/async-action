import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';
import AuthForm from './AuthForm';
import { getIsLoggedIn } from '../selectors';

const Signin = ({ isLoggedIn, login }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return <AuthForm title="Login" onSubmit={login} />;
  }
};

export default connect(
  (state) => ({
    isLoggedIn: getIsLoggedIn(state),
  }),
  { login }
)(Signin);
