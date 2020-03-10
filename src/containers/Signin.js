import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';
import { AuthForm } from '../components';

const Signin = ({ isLoggedIn, login }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return <AuthForm title="Login" onSubmit={login} />;
  }
};

export default connect(
  ({ auth }) => ({
    isLoggedIn: !!auth.token
  }),
  { login }
)(Signin);
