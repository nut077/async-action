import { EDIT_ARTICLE_SUCCESS, LOAD_ARTICLE_SUCCESS } from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_ARTICLE_SUCCESS:
    case EDIT_ARTICLE_SUCCESS:
      return action.payload.comments.map(({ id, message, userId }) => ({
        id,
        message,
        userId,
      }));
    default:
      return state;
  }
};
