import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE
} from "../actions";
import { createAction } from "redux-api-middleware";

export const loadArticle = id =>
  createAction({
    endpoint: `/api/articles/${id}`,
    method: "GET",
    types: [LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLES_FAILURE]
  });

export const loadArticles = () =>
  createAction({
    endpoint: "/api/articles",
    method: "GET",
    types: [LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLE_FAILURE]
  });

export const createArticle = input =>
  createAction({
    endpoint: "/api/articles",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(input),
    types: [
      CREATE_ARTICLE_REQUEST,
      CREATE_ARTICLE_SUCCESS,
      CREATE_ARTICLE_FAILURE
    ]
  });
