import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from '../../types';
import { createAction } from 'redux-api-middleware';

export const loadArticle = (id) =>
  createAction({
    endpoint: `/api/articles/${id}`,
    method: 'GET',
    types: [LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLES_FAILURE],
  });

export const loadArticles = () =>
  createAction({
    endpoint: '/api/articles',
    method: 'GET',
    types: [LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLE_FAILURE],
  });

export const createArticle = (article) =>
  createAction({
    endpoint: '/api/articles',
    method: 'POST',
    headers: {},
    body: JSON.stringify(article),
    types: [
      CREATE_ARTICLE_REQUEST,
      CREATE_ARTICLE_SUCCESS,
      CREATE_ARTICLE_FAILURE,
    ],
  });

export const editArticle = (id, article) =>
  createAction({
    endpoint: `/api/articles/${id}`,
    method: 'PUT',
    headers: {},
    body: JSON.stringify(article),
    types: [EDIT_ARTICLE_REQUEST, EDIT_ARTICLE_SUCCESS, EDIT_ARTICLE_FAILURE],
  });

export const deleteArticle = (id) =>
  createAction({
    endpoint: `/api/articles/${id}`,
    method: 'DELETE',
    headers: {},
    types: [
      DELETE_ARTICLE_REQUEST,
      {
        type: DELETE_ARTICLE_SUCCESS,
        payload(action, state, res) {
          return {
            id,
          };
        },
      },
      DELETE_ARTICLE_FAILURE,
    ],
  });
