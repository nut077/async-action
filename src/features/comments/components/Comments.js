import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './NewComment';

const Comments = ({ comments = [], createComment }) => (
  <div>
    <NewComment onSubmit={createComment} />
    {comments.map(({ id, message, username }) => {
      return <Comment key={id} message={message} username={username} />;
    })}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Comments;
