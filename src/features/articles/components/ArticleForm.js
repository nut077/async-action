import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './ArticleForm.scss';
import { Button } from '../../ui';

const renderField = ({
  input,
  label,
  type,
  element,
  rows,
  meta: { touched, error },
}) => (
  <div className="group">
    <label htmlFor={label}>{label}</label>
    {element === 'input' ? (
      <input {...input} type={type} placeholder={label} id={label} />
    ) : (
      <textarea
        {...input}
        rows={rows}
        placeholder={label}
        id={label}
      ></textarea>
    )}
    {touched && error && <div className="error">{error}</div>}
  </div>
);

const ArticleForm = ({ header, handleSubmit }) => {
  return (
    <form>
      <h2 className="title-article-form">{header}</h2>
      <Field
        component={renderField}
        element="input"
        type="text"
        id="title"
        name="title"
        label="title"
      />
      <Field
        component={renderField}
        element="textarea"
        rows="3"
        id="excerpt"
        name="excerpt"
        label="excerpt"
      />
      <Field
        component={renderField}
        element="textarea"
        rows="5"
        id="content"
        name="content"
        label="content"
      />
      <div className="button-article-form">
        <Button onClick={handleSubmit}>{header}</Button>
      </div>
    </form>
  );
};

function validate(values) {
  let errors = {};
  if (!values.title) errors.title = 'Required.';
  if (!values.excerpt) errors.excerpt = 'Required.';
  if (!values.content) errors.content = 'Required.';
  return errors;
}

ArticleForm.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'article',
  validate,
})(ArticleForm);
