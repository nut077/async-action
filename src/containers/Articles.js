import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticles } from '../actions';
import { Article } from '../components';
import TopBarProgress from 'react-topbar-progress-indicator';
import './Articles.scss';

const Articles = ({ articles, isLoading, loadArticles }) => {
  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <div className="container">
      {isLoading && <TopBarProgress />}
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
  { loadArticles }
)(Articles);
