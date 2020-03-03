import { LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_REQUEST:
      return {
        isLoading: true,
        items: []
      };
    case LOAD_ARTICLES_SUCCESS:
      return {
        isLoading: false,
        items: action.articles
      };
    default:
      return state;
  }
};
