import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticles } from '../actions';
import { Article, Button } from '../components';
import TopBarProgress from 'react-topbar-progress-indicator';
import './Articles.scss';

const Articles = ({ articles, isLoading, loadArticles, isLoggedIn }) => {
  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <div className="container">
      {isLoading && <TopBarProgress />}
      {isLoggedIn && (
        <div className="new-article">
          <Button to="/articles/new">New Article</Button>
        </div>
      )}

      {articles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default connect(
  ({ articles, auth }) => ({
    articles: articles.items,
    isLoading: articles.isLoading,
    isLoggedIn: !!auth.token
  }),
  { loadArticles }
)(Articles);
