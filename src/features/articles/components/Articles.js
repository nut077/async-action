import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticles } from '../actions';
import Article from './Article';
import TopBarProgress from 'react-topbar-progress-indicator';
import './Articles.scss';
import { getArticles } from '../selectors';
import { getIsLoggedIn } from '../../auth';
import { getIsLoading, Button } from '../../ui';
import { v4 as uuidv4 } from 'uuid';

const Articles = ({ articles, isLoading, isLoggedIn }) => {
  console.log('articles -->>', articles);
  return (
    <div className="container">
      {isLoading && <TopBarProgress />}
      {isLoggedIn && (
        <div className="new-article">
          <Button to="/articles/new">New Article</Button>
        </div>
      )}

      {articles.map((article) => {
        debugger;
        if (typeof article.id !== 'undefined') {
          return <Article key={article.id} {...article} />;
        } else {
          return <span key={uuidv4()}></span>;
        }
      })}
    </div>
  );
};

const ArticlesContainer = ({
  articles,
  isLoading,
  loadArticles,
  isLoggedIn,
}) => {
  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <Articles
      articles={articles}
      isLoading={isLoading}
      isLoggedIn={isLoggedIn}
    />
  );
};

export default connect(
  (state) => ({
    articles: getArticles(state),
    isLoading: getIsLoading(state),
    isLoggedIn: getIsLoggedIn(state),
  }),
  { loadArticles }
)(ArticlesContainer);
