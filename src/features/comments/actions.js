import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from '../../types';
import { createAction } from 'redux-api-middleware';

export const createComment = (comment) =>
  createAction({
    endpoint: '/api/comments',
    method: 'POST',
    headers: {},
    body: JSON.stringify(comment),
    types: [
      CREATE_COMMENT_REQUEST,
      CREATE_COMMENT_SUCCESS,
      CREATE_COMMENT_FAILURE,
    ],
  });
