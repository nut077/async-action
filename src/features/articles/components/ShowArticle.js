import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadArticle, deleteArticle } from '../actions';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getArticle } from '../selectors';
import { getIsLoggedIn } from '../../auth';
import { Comments, createComment } from '../../comments';
import { Button } from '../../ui';

const ShowArticle = ({ article, deleteArticle, createComment, isLoggedIn }) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.content}</p>
    {isLoggedIn && (
      <div className="buttons-show-article">
        <Button to={`/articles/${article.id}/edit`}>Edit</Button>
        <Button onClick={deleteArticle}>Delete</Button>
      </div>
    )}

    <hr />
    {<Comments comments={article.comments} createComment={createComment} />}
  </div>
);

ShowArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired
    ),
  }).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const ShowArticleContainer = ({
  article,
  loadArticle,
  isLoggedIn,
  deleteArticle,
  createComment,
}) => {
  useEffect(() => {
    loadArticle();
  }, [loadArticle]);

  if (!!Object.keys(article).length) {
    return (
      <ShowArticle
        article={article}
        deleteArticle={deleteArticle}
        createComment={createComment}
        isLoggedIn={isLoggedIn}
      />
    );
  } else {
    return <TopBarProgress />;
  }
};

export default connect(
  (state) => ({
    article: getArticle(state),
    isLoggedIn: getIsLoggedIn(state),
  }),
  (dispatch, { match: { params }, history }) => ({
    loadArticle() {
      dispatch(loadArticle(params.id));
    },
    deleteArticle() {
      dispatch(deleteArticle(params.id));
      history.push('/articles');
    },
    createComment(message) {
      dispatch(createComment({ articleId: params.id, message }));
      history.push(`/articles/${params.id}`);
    },
  })
)(ShowArticleContainer);
