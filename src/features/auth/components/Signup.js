import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../actions';
import AuthForm from './AuthForm';
import { getIsLoggedIn } from '../selectors';

const Signup = ({ isLoggedIn, register }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return <AuthForm title="Register" onSubmit={register} />;
  }
};

export default connect((state) => getIsLoggedIn(state), { register })(Signup);
