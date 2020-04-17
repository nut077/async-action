import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import { Button } from '../../ui';
import './AuthForm.scss';

const AuthForm = ({ title, onSubmit }) => {
  const [inputForm, setInputForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
      isDirty: false,
    }
  );

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputForm({ [name]: value, isDirty: true });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setInputForm({ isDirty: false });
    onSubmit(inputForm);
  };

  return (
    <form>
      <Prompt
        when={inputForm.isDirty}
        message="Are you sure you want to leave this page?"
      />
      <h2 className="titleAuthForm">{title}</h2>
      <div className="group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={onChange}
          value={inputForm.username}
        />
      </div>
      <div className="group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          value={inputForm.password}
        />
      </div>
      <div className="buttonAuthForm">
        <Button onClick={submitForm}>{title}</Button>
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
