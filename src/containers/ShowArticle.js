import React from 'react';
import './ShowArticle.scss';

const ShowArticle = ({ match: { params } }) => {
  const id = params.id;
  return <div>Show Article id {id}</div>;
};

export default ShowArticle;
