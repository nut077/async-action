import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({ id, title, excerpt }) => (
  <div className="article">
    <div className="header">
      <Link to={`/articles/${id}`} className="title">
        {title}
      </Link>
    </div>
    <div className="excerpt">{excerpt}</div>
  </div>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Article;
