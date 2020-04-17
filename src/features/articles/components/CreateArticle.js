import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../actions';
import ArticleForm from './ArticleForm';

const CreateArticle = ({ createArticle }) => (
  <div>
    <ArticleForm header="New Article" onSubmit={createArticle} />
  </div>
);

export default connect(null, (dispatch, { history }) => ({
  createArticle(input) {
    dispatch(createArticle(input));
    setTimeout(() => history.push('/articles'), 1000);
  },
}))(CreateArticle);
