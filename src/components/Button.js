import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ to, onClick, children }) =>
  to ? (
    <Link to={to} className="button">
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );

Button.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default Button;
