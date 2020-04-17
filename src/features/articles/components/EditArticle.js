import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { loadArticle, editArticle } from '../actions';
import ArticleForm from './ArticleForm';
import { getArticle } from '../selectors';

const EditArticle = ({ editArticle, article }) => (
  <ArticleForm
    initialValues={article}
    header="Edit Article"
    onSubmit={editArticle}
  />
);

export default compose(
  withRouter,
  connect(
    (state) => ({
      article: getArticle(state),
    }),
    (dispatch, { match: { params }, history }) => ({
      editArticle(article) {
        dispatch(editArticle(params.id, article));
        history.push('/articles');
      },
      loadArticle() {
        dispatch(loadArticle(params.id));
      },
    })
  )
)(EditArticle);
