import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticle } from '../actions';
import { Loading, Article } from '../components';
import './Articles.scss';

const Articles = ({ articles, isLoading, loadArticle }) => {
  useEffect(() => {
    loadArticle();
  }, [loadArticle]);

  return (
    <div className="container">
      {isLoading && <Loading />}
      <hr />
      {articles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default connect(
  ({ articles }) => ({
    articles: articles.items,
    isLoading: articles.isLoading
  }),
  { loadArticle }
)(Articles);
