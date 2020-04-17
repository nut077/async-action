import { combineReducers } from 'redux';
import articles from './articles';
import auth from './auth';
import ui from './ui';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
  form: FormReducer,
  ui,
  articles,
  auth,
});
