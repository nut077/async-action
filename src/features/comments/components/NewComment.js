import React, { useState } from 'react';
import { Button } from '../../ui';
import './NewComment.scss';

const NewComment = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const submitComment = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  return (
    <div>
      <div className="container-new-comment">
        <textarea
          rows="5"
          onChange={onCommentChange}
          value={comment}
        ></textarea>
      </div>
      <div className="button-new-comment">
        <Button onClick={submitComment}>Comment</Button>
      </div>
    </div>
  );
};

export default NewComment;
