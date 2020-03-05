import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ userId, message }) => (
  <div className="comment">
    <div className="user">{userId}</div>
    <div className="message">{message}</div>
  </div>
);

Comment.propTypes = {
  userId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Comment;
