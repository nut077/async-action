import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticle } from '../actions';
import TopBarProgress from 'react-topbar-progress-indicator';
import { Comment } from '../components';
import './ShowArticle.scss';

const ShowArticle = ({ article, loadArticle }) => {
  useEffect(() => {
    loadArticle();
  }, [loadArticle]);

  if (article) {
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <div className="buttons"></div>
        <hr />
        {article.comments.map((comment, index) => (
          <Comment key={`comment${index}`} {...comment} />
        ))}
      </div>
    );
  } else {
    return <TopBarProgress />;
  }
};

export default connect(
  ({ articles: { items } }, { match: { params } }) => ({
    article: items.find(article => article.id === params.id)
  }),
  (dispatch, { match: { params } }) => ({
    loadArticle() {
      dispatch(loadArticle(params.id));
    }
  })
)(ShowArticle);
