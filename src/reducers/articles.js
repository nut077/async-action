import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_REQUEST:
    case LOAD_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
      return {
        isLoading: true,
        items: [],
      };
    case LOAD_ARTICLES_SUCCESS:
      return {
        isLoading: false,
        items: action.payload,
      };
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS: {
      return {
        isLoading: false,
        items: [action.payload],
      };
    }
    default:
      return state;
  }
};
