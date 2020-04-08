import { CREATE_ARTICLE_SUCCESS, LOAD_ARTICLE_SUCCESS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
      return action.payload.comments
        .map(({ userId, username }) => ({ userId, username }))
        .reduce(
          (result, user) =>
            result.find((u) => u.userId === user.userId)
              ? result
              : [...result, user],
          []
        );
    default:
      return state;
  }
};
