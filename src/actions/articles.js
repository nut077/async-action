import { LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS } from '../actions';
import axios from 'axios';

function requestArticles() {
  return {
    type: LOAD_ARTICLES_REQUEST
  };
}

function receiveArticles(articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    articles
  };
}

export function loadArticle() {
  return dispatch => {
    dispatch(requestArticles());
    axios
      .get('/api/articles')
      .then(({ data: { data } }) => dispatch(receiveArticles(data)));
  };
}
