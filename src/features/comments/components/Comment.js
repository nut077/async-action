import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ username, message }) => (
  <div>
    <div className="comment">
      <div className="user">{username}</div>
      <div className="message">{message}</div>
    </div>
  </div>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
