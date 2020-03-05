import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS
} from '../actions';
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

function requestArticle() {
  return {
    type: LOAD_ARTICLE_REQUEST
  };
}

function receiveArticle(article) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    article
  };
}

export function loadArticle(id) {
  return dispatch => {
    dispatch(requestArticle());
    axios
      .get(`/api/articles/${id}`)
      .then(({ data }) => dispatch(receiveArticle(data)));
  };
}

export function loadArticles() {
  return dispatch => {
    dispatch(requestArticles());
    axios
      .get('/api/articles')
      .then(({ data }) => dispatch(receiveArticles(data)));
  };
}
