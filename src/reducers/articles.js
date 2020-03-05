import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS
} from '../actions';

const initialState = {
  isLoading: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_REQUEST:
    case LOAD_ARTICLE_REQUEST:
      return {
        isLoading: true,
        items: []
      };
    case LOAD_ARTICLES_SUCCESS:
      return {
        isLoading: false,
        items: action.articles
      };
    case LOAD_ARTICLE_SUCCESS:
      return {
        isLoading: false,
        items: [action.article]
      };
    default:
      return state;
  }
};
