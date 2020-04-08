import { CREATE_ARTICLE_SUCCESS, LOAD_ARTICLE_SUCCESS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
      return action.payload.comments.map(({ id, message, userId }) => ({
        id,
        message,
        userId,
      }));
    default:
      return state;
  }
};
