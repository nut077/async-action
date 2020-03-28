import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE
} from '../actions';
import { createAction } from 'redux-api-middleware';

export const loadArticle = id =>
  createAction({
    endpoint: `/api/articles/${id}`,
    method: 'GET',
    types: [LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLES_FAILURE]
  });

export const loadArticles = () =>
  createAction({
    endpoint: '/api/articles',
    method: 'GET',
    types: [LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLE_FAILURE]
  });
